"use-client";

import { ReloadIcon } from "@radix-ui/react-icons";
import React from "react";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { SignInButton } from "@clerk/nextjs";
import { FaRegHeart } from "react-icons/fa";
import { LuTrash2, LuSquarePen } from "react-icons/lu";

type btnSize = "default" | "sm" | "lg";
type SubmitBtnProps = {
  text?: string;
  size?: btnSize;

  className?: string;
};
const Buttons = ({ text, size = "lg", className = "" }: SubmitBtnProps) => {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size={size} className={cn(className)}>
      {pending ? (
        <>
          {" "}
          <ReloadIcon className="mr-2 w-4 h-4 animate-spin" /> Please wait...
        </>
      ) : (
        text
      )}
    </Button>
  );
};

export default Buttons;
