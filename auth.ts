import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "@/lib/db";
import authConfig from "@/auth.config";
import { getUserById } from "@/data/user";
import { UserRole } from "@prisma/client";
import { getTwofactorConfirmationByUserId } from "./data/two-factor-confirmation";
import { generateTwoFactorToken } from "./lib/tokens";
import { sendTwoFactorTokenEmail } from "./lib/mail";

export const { auth, handlers, signIn, signOut } = NextAuth({
  pages: {
    signIn: "/login",
    error: "/error",
  },
  events: {
    linkAccount: async ({ user }) => {
      await db.user.update({
        where: {
          id: user.id,
        },
        data: {
          emailVerified: new Date(),
        },
      });
    },
  },
  callbacks: {
    async signIn({ user, account }) {
      //Allow OAuth without email verification
      if (account?.provider !== "credentials") return true;

      //Prevent Signin without Email verification
      const existingUser = await getUserById(user.id);
      if (!existingUser?.emailVerified) return false;

      // TODO: Add 2FA check
      if (existingUser.isTwoFactorEnabled) {
        const twoFactorConfirmation = await getTwofactorConfirmationByUserId(
          existingUser.id
        );

        console.log({twoFactorConfirmation})

        if (!twoFactorConfirmation) return false;

        // generateTwoFactorToken
        // sendTwoFactorTokenEmail
        //Delete 2FA (otp) code for next sign in
        await db.twoFactorConfirmation.delete({
          where: { id: twoFactorConfirmation.id },
        });
      }

      return true;
    },
    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      if (token.role && session.user) {
        session.user.role = token.role as UserRole;
        // Add As many custom fields as you want (make sure they are defined in next-auth.d.ts)
        // session.user.customField = "something";
      }
      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token;

      const existingUser = await getUserById(token.sub);

      if (!existingUser) return token;

      token.role = existingUser.role;

      return token;
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});
