"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { FaSignOutAlt, FaUser } from "react-icons/fa";
import { useCurrentUser } from "@/hooks/use-current-user";
import { LogOutButton } from "./logout-button";

export const UserButton = () => {
    const user = useCurrentUser();

  return (
    <>
    {/* {JSON.stringify(user)} */}
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none hover:scale-110 transition-all">
        <Avatar>
          <AvatarImage src={user?.image || ""} alt="@shadcn" />
          <AvatarFallback className="bg-black">
            <FaUser />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
       <DropdownMenuContent className="w-40" align="end">
        <LogOutButton>
            <DropdownMenuItem className="cursor-pointer flex items-center gap-1">
                <FaSignOutAlt className="w-4 h-4"/>
                Logout
            </DropdownMenuItem>
        </LogOutButton>
       </DropdownMenuContent>
    </DropdownMenu>
    </>
  );
};
