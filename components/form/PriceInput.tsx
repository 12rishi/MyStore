import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

type FormInputNumberProps = {
  defaultValue: number;
};
const PriceInput = ({ defaultValue }: FormInputNumberProps) => {
  const name = "price";
  return (
    <div className="mb-4">
      <Label htmlFor={name} className="capitalize mb-2">
        Price($)
      </Label>
      <Input
        type="number"
        name={name}
        defaultValue={defaultValue || 100}
        min={0}
        required
      />
    </div>
  );
};

export default PriceInput;
