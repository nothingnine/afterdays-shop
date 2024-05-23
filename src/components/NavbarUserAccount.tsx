"use client";

import { CircleUserRound } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/hooks/use-auth";

const NavbarUserAccount = () => {
  const { signOut } = useAuth();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>My Account</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={signOut} className="cursor-pointer">
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavbarUserAccount;
