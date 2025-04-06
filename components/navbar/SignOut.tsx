"use client";
import { SignOutButton } from "@clerk/nextjs";
import Link from "next/link";

import React from "react";
import { toast } from "sonner";

const SignOut = () => {
  const handleLogout = () => {
    toast("successfully logout");
  };
  return (
    <SignOutButton>
      <Link href="/" onClick={handleLogout}>
        Sign Out
      </Link>
    </SignOutButton>
  );
};

export default SignOut;
