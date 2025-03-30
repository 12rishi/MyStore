import React from "react";
import { Separator } from "../ui/separator";

const SectionTitle = ({ text }: { text: string }) => {
  return (
    <>
      <h2 className="text-xl tracking-wider ">{text}</h2>
      <Separator />
    </>
  );
};

export default SectionTitle;
