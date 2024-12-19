"use client";

import { Button } from "@/components/ui/button";
import { RegisterButton } from "./register-button";
import { LoginButton } from "./login-button";

interface AuthModalButtonsProps {
  buttonType: "register" | "login";
}
export const AuthModalButtons = ({ buttonType }: AuthModalButtonsProps) => {
  return (
    buttonType === "register" ? (
      <RegisterButton mode="modal" asChild>
        <Button className="w-full" variant="link" size="sm">
          Register
        </Button>
      </RegisterButton>
    ) : buttonType === "login" && (
      <LoginButton mode="modal" asChild>
        <Button className="w-full" variant="link" size="sm">
          Login
        </Button>
      </LoginButton>
    )
  );
};