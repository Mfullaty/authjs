"use client";

import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { LoginForm } from "./login-form";

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
  className?: string;
}

export const LoginButton = ({
  children,
  mode = "redirect",
  asChild,
  className,
}: LoginButtonProps) => {
  const onClick = () => {
    router.push("/login");
  };

  const router = useRouter();

  if (mode === "modal") {
    return (
      <Dialog>
        <DialogTrigger asChild={asChild}>{children}</DialogTrigger>
        <DialogContent className="sm:max-w-[425px] p-0 w-auto bg-transparent shadow-none border-none">
          <LoginForm />
        </DialogContent>
      </Dialog>
    );
  }
  return (
    <span onClick={onClick} className={cn("cursor-pointer", className)}>
      {children}
    </span>
  );
};
