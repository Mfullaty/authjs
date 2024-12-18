"use client";

import { logOut } from "@/actions/logout";
import { cn } from "@/lib/utils";

interface LogOutButtonProps {
  children?: React.ReactNode;
  asChild?: boolean;
  className?: string;
}

export const LogOutButton = ({ children, className }: LogOutButtonProps) => {
  const onClick = () => {
    logOut();
  };
  return (
    <span onClick={onClick} className={cn("cursor-pointer", className)}>
      {children}
    </span>
  );
};

