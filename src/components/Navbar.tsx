import { ArrowRight, CircleUserRound, Search, ShoppingBag } from "lucide-react";
import Link from "next/link";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Cart from "./Cart";
import { getServerSideUser } from "@/lib/payload-utils";
import { cookies } from "next/headers";
import NavbarUserAccount from "./NavbarUserAccount";

const Navbar = async () => {
  const nextCookies = cookies();
  const { user } = await getServerSideUser(nextCookies);

  return (
    <nav
      className="sticky z-[10] flex flex-row h-20 border-b border-gray-200 mx-auto justify-between items-center bg-white 
    w-full transition-all inset-x-0 top-0"
    >
      <Link href="/">
        <img src="/afterdays-logo.png" className="w-40 ml-20" />
      </Link>
      <div className="flex flex-row items-center justify-center mr-10 gap-4">
        <Link href="/products">Products</Link>
        <span className="flex items-center rounded-full bg-muted px-4">
          <input
            className="bg-muted px-3 py-2 text-sm focus:outline-none placeholder:text-muted-foreground"
            placeholder="Search Product"
          />
          <Search />
        </span>
        <Cart />
        {user ? (
          <NavbarUserAccount />
        ) : (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <CircleUserRound />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/sign-in">Sign in</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/sign-up">Create Account</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
