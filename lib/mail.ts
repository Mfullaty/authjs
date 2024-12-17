import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmationLink = `${process.env.BASE_URL}/verify?token=${token}`;

  await resend.emails.send({
    from: "Onboarding AuthJs <info@example.com>",
    to: email,
    subject: "Please verify your email address",
    html: `<p>Click <a href="${confirmationLink}">here</a> to verify your email address</p>`,
  });
};
