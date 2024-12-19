"use server";
import * as z from "zod";
import { SettingsSchema } from "@/schemas";
import { db } from "@/lib/db";
import { getUserByEmail, getUserById } from "@/data/user";
import { currentUser } from "@/lib/current-user";
import { generateVerificationToken } from "@/lib/tokens";
import { sendVerificationEmail } from "@/lib/mail";
import bcrypt from "bcryptjs";

export const settings = async (values: z.infer<typeof SettingsSchema>) => {
  const user = await currentUser();
  const dbUser = await getUserById(user?.id);



  if (!user || !dbUser) {
    return { error: "Unauthorized" };
  }

  if (user?.isOAuth) {
    values.email = undefined;
    values.password = undefined;
    values.newPassword = undefined;
    values.isTwoFactorEnabled = undefined;
  }

  if(values.email && values.email !== user.email){
    const existingUser = await getUserByEmail(values.email);
    if(existingUser && existingUser.id !== user.id){
      return {error: "Email already exists"}
    }

    const verificationToken = await generateVerificationToken(values.email);

    await sendVerificationEmail(verificationToken.email, verificationToken.token);

    return {success: "Confirmation Email Sent!"}

  }

  if(values.password && values.newPassword && dbUser.password){
    const passwordsMatch = await bcrypt.compare(values.password, dbUser.password);

    if(!passwordsMatch){
      return {error: "Incorrect Password!"}
    }

    const hashedPassword = bcrypt.hashSync(values.newPassword, 10);
    values.password = hashedPassword;
    values.newPassword = undefined;
  }


  await db.user.update({
    where: {id: dbUser.id},
    data: {
        ...values
    }
  });

  return {success: "Settings Updated!"}
};
