"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { adminSideBarLink } from "@/utils/links";
import Link from "next/link";

import { Button } from "@/components/ui/button";
const SidebarLink = () => {
  const pathname = usePathname();
  return (
    <aside>
      {adminSideBarLink.map((link) => {
        const isActive = pathname === link.href;
        const variant = isActive ? "default" : "ghost";
        return (
          <Button
            variant={variant}
            asChild
            className="w-full mb-2 capitalize font-normal"
          >
            <Link href={link.href} key={link.href}>
              {link.label}
            </Link>
          </Button>
        );
      })}
    </aside>
  );
};

export default SidebarLink;
