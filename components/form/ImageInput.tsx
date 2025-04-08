import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

const ImageInput = () => {
  const name = "image";
  return (
    <div className="mb-4">
      <Label htmlFor={name} className="capitalize mb-2">
        Image
      </Label>
      <Input id={name} type="file" name={name} accept="image/*" required />
    </div>
  );
};

export default ImageInput;
