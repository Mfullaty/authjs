"use client";

import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
  className?: string;
}

const LoginButton = ({
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
    return <span>To Do: Implement Modal</span>;
  }
  return (
    <span onClick={onClick} className={cn("cursor-pointer", className)}>
      {children}
    </span>
  );
};

export default LoginButton;
