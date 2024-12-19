"use client";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import{ LoginButton} from "@/components/auth/login-button";
import { RegisterButton } from "@/components/auth/register-button";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Home() {
  return (
    <main className="flex h-full flex-col justify-center items-center ">
      <div className="space-y-6">
        <h1
          className={cn(
            "text-6xl font-semibold drop-shadow ",
            poppins.className
          )}
        >
          🔐Auth
        </h1>
        <p className={cn("text-center text-lg", poppins.className)}>
          A simple authentication system
        </p>
      </div>
      <LoginButton mode="modal" asChild>
        <Button variant="outline" size="lg">
          Login
        </Button>
      </LoginButton>
      
      <RegisterButton mode="modal" asChild>
        <Button variant="outline" size="lg">
          Register
        </Button>
      </RegisterButton>
    </main>
  );
}
