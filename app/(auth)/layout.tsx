import { ModeToggle } from "@/components/mode-toggle";
import React from "react";

const Authlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex items-center justify-center">
      <ModeToggle />

      {children}
    </div>
  );
};

export default Authlayout;
