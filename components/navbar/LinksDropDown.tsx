import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { LuAlignLeft } from "react-icons/lu";
import { DropdownMenuContent } from "@radix-ui/react-dropdown-menu";
import Link from "next/link";
import { navLinks } from "@/utils/links";

const LinksDropDown = () => {
  const [open, setOpen] = useState(false);
  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="max-w-[100px] flex items-center justify-center"
        >
          <LuAlignLeft className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-48 dark:bg-primary text-background z-20 "
        align="start"
        sideOffset={10}
      >
        {navLinks.map((link) => (
          <DropdownMenuItem key={link.href} onClick={() => setOpen(false)}>
            <Link href={link.href} className="capitalize ">
              {link.label}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LinksDropDown;
