import React from "react";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
type CheckBoxInputProps = {
  labelText: string;
  name: string;
  defaultChecked?: boolean;
};
const CheckBoxInput = ({
  labelText,
  name,
  defaultChecked = false,
}: CheckBoxInputProps) => {
  return (
    <div className="flex items-center gap-2 mt-2">
      <Checkbox id={name} name={name} defaultChecked={defaultChecked} />
      <Label
        htmlFor={name}
        className="capitalize mb-2 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {labelText || name}
      </Label>
    </div>
  );
};

export default CheckBoxInput;
