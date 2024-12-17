import * as z from "zod";

export const NewPasswordSchema = z.object({
  password: z.string().min(6, {
    message: "Password must be at least 6 characters",
  })
});

export const ResetSchema = z.object({
  email: z.string().email({
    message: "email address is required",
  })
});
export const LoginSchema = z.object({
  email: z.string().email({
    message: "email address is required",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters",
  }),
});

export const RegisterSchema = z.object({
  name: z.string().min(3, {
    message: "Name is Required",
  }),
  email: z.string().email({
    message: "email address is required",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters",
  }),
});
