import React from "react";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
type TextAreaInputProps = {
  labelText?: string;
  name: string;
  defaultValue?: string;
};
const TextAreaInput = ({
  labelText,
  name,
  defaultValue,
}: TextAreaInputProps) => {
  return (
    <div className="mb-4">
      <Label htmlFor={name} className="capitalize mb-2">
        {labelText || name}
      </Label>
      <Textarea
        name={name}
        defaultValue={defaultValue}
        id={name}
        rows={5}
        className="leading-loose"
      />
    </div>
  );
};

export default TextAreaInput;
