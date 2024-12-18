"use server";
import { signOut } from "@/auth";

export const logOut = async () => {
    // Some server stuff before sign out
  await signOut();
};
