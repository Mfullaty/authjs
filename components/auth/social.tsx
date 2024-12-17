import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/route";

interface SocialProps {
  googleEnabled?: boolean;
  githubEnabled?: boolean;
}

export const Social = ({
  googleEnabled = true,
  githubEnabled,
}: SocialProps) => {

  const onClick = (provider: "google" | "facebook" | "github") => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    })
  }
  return (
    <div className="flex items-center w-full gap-x-2">
      {googleEnabled && (
        <Button
          size="lg"
          className="w-full"
          variant="outline"
          onClick={() => onClick("google")}
        >
          <FaGoogle className="w-5-h-5" />
        </Button>
      )}
      {githubEnabled && (
        <Button
          size="lg"
          className="w-full"
          variant="outline"
          onClick={() => onClick("github")}
        >
          <FaGithub className="w-5 h-5" />
        </Button>
      )}
    </div>
  );
};
