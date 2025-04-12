"use client";

import { ReloadIcon } from "@radix-ui/react-icons";
import React from "react";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { Loader2, LucidePenSquare, TrashIcon } from "lucide-react";

type btnSize = "default" | "sm" | "lg";
type SubmitBtnProps = {
  text?: string;
  size?: btnSize;

  className?: string;
};
type actionType = "edit" | "delete";
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
export const IconButton = ({ actionType }: { actionType: actionType }) => {
  const { pending } = useFormStatus();
  const renderIcon = () => {
    switch (actionType) {
      case "edit":
        return <LucidePenSquare className="w-4 h-4" />;
      case "delete":
        return <TrashIcon className="w-4 h-4" />;
      default:
        const never: never = actionType;
        throw new Error(`Unknown action type: ${never}`);
    }
  };
  return (
    <Button variant="ghost" size="icon" type="submit">
      {pending && <Loader2 className="w-4 h-4 animate-spin" />}
      {renderIcon()}
    </Button>
  );
};
