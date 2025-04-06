import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { LuAlignLeft, LuUser } from "react-icons/lu";
import { Separator } from "@radix-ui/react-dropdown-menu";
import Link from "next/link";
import { navLinks } from "@/utils/links";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import SignOut from "./SignOut";

// Client component for dropdown menu
const LinksDropDown = () => {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="lg"
          className="max-w-full flex items-center justify-between"
        >
          <LuAlignLeft className="w-4 h-4" />
          {/* Replace the custom Usericon with Clerk's UserButton or a simple icon */}
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <LuUser className="w-6 h-6" />
          </SignedOut>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-48 dark:bg-primary text-background z-20"
        align="start"
        sideOffset={10}
      >
        <SignedOut>
          <DropdownMenuItem>
            <SignInButton mode="modal">
              <Button variant="ghost" className="bg-transparent">
                Login
              </Button>
            </SignInButton>
          </DropdownMenuItem>
          <Separator />
          <DropdownMenuItem>
            <SignUpButton mode="modal">
              <Button variant={"ghost"} className="bg-transparent">
                Register
              </Button>
            </SignUpButton>
          </DropdownMenuItem>
        </SignedOut>
        <SignedIn>
          {navLinks.map((link) => (
            <DropdownMenuItem key={link.href} onClick={() => setOpen(false)}>
              <Link
                href={link.href}
                className="capitalize text-primary dark:text-background"
              >
                {link.label}
              </Link>
            </DropdownMenuItem>
          ))}
          <Separator />
          <DropdownMenuItem>
            <SignOut />
          </DropdownMenuItem>
        </SignedIn>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LinksDropDown;
