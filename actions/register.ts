"use server";

import { RegisterSchema } from "@/schemas";
import { z } from "zod";

export const Register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid Fields" };
  }

  return { success: "Registered" };
};
