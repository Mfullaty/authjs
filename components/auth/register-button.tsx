"use client";

import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Register } from "@/actions/register";
import { RegisterForm } from "@/components/auth/register-form";

interface RegisterButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
  className?: string;
}

export const RegisterButton = ({
  children,
  mode = "redirect",
  asChild,
  className,
}: RegisterButtonProps) => {
  const onClick = () => {
    router.push("/login");
  };

  const router = useRouter();

  if (mode === "modal") {
    return (
      <Dialog>
        <DialogTrigger asChild={asChild}>{children}</DialogTrigger>
        <DialogContent className="sm:max-w-[425px] p-0 w-auto bg-transparent shadow-none border-none">
          <RegisterForm />
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