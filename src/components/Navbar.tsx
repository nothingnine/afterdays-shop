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

const Navbar = async () => {
  const user = false;

  const isAdmin = false;

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
        {isAdmin ? (
          <>
            <Link href="/dashboard">
              <div className="bg-muted ml-3 w-fit rounded-full px-3 py-2 flex flex-row">
                dashboard
                <ArrowRight className="p-1 bg-black text-white rounded-full ml-1" />
              </div>
            </Link>
          </>
        ) : (
          <>
            <span className="flex items-center rounded-full bg-muted px-4">
              <input
                className="bg-muted px-3 py-2 text-sm focus:outline-none placeholder:text-muted-foreground"
                placeholder="Search Product"
              />
              <Search />
            </span>
            <Cart />
          </>
        )}

        <DropdownMenu>
          <DropdownMenuTrigger>
            <CircleUserRound />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {user ? (
              <DropdownMenuItem>
                <Link href="/api/auth/logout">Log out</Link>
              </DropdownMenuItem>
            ) : (
              <>
                <DropdownMenuItem>
                  <Link href="/api/auth/login">Log in</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/api/auth/register">Create Account</Link>
                </DropdownMenuItem>
              </>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
