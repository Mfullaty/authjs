import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmationLink = `${process.env.BASE_URL}/verify-email?token=${token}`;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Please verify your email address",
    html: `<p>Click <a href="${confirmationLink}">here</a> to verify your email address</p>`,
  });
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const confirmationLink = `${process.env.BASE_URL}/reset-password?token=${token}`;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Reset Your Password",
    html: `<p>Click <a href="${confirmationLink}">here</a> to reset your password</p>`,
  });
};
