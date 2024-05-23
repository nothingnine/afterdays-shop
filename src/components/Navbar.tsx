import { Search } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Cart from "./Cart";
import { getServerSideUser } from "@/lib/payload-utils";
import { cookies } from "next/headers";
import NavbarUserAccount from "./NavbarUserAccount";
import ScrollNavbar from "./ScrollNavbar";

const Navbar = async () => {
  const nextCookies = cookies();
  const { user } = await getServerSideUser(nextCookies);

  return (
    <ScrollNavbar>
      <Link href="/">
        <img src="/afterdays-logo.png" className="w-40 ml-20" />
      </Link>
      <div className="left-[50%] top-[50%] w-2/3 mr-20 hidden md:block">
        <div className="w-full flex items-center justify-end gap-10">
          <span className="h-fit hidden lg:flex items-center rounded-full bg-gray-10 px-4">
            <input
              className="bg-muted px-3 py-2 text-sm focus:outline-none placeholder:text-muted-foreground"
              placeholder="Search Product"
            />
            <Search />
          </span>
          <Link href="/products">Products</Link>
          {user ? (
            <NavbarUserAccount />
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger>My Account</DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="/sign-in">Sign in</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/sign-up">Create Account</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
          <div className="bg-gray-10 px-6 rounded-full">
            <Cart />
          </div>
        </div>
      </div>
    </ScrollNavbar>
  );
};

export default Navbar;
