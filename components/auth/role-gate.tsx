"use client"
import { UserRole } from "@prisma/client";
import FormError from "../form-error";

import { useCurrentRole } from "@/hooks/use-current-user";

interface RoleGateProps {
  children: React.ReactNode;
  allowedRole: UserRole;
}

const RoleGate =  ({ children, allowedRole }: RoleGateProps) => {
  const role =  useCurrentRole();

  if (role !== allowedRole) {
    return (
      <FormError message="You don't have the permission to view this content!" />
    );
  }

  return <>{children}</>;
};

export default RoleGate;
