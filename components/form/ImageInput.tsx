import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

const ImageInput = () => {
  const name = "image";
  return (
    <div className="mt-4 z-10">
      <Label htmlFor={name} className="capitalize mb-4">
        Image
      </Label>
      <Input id={name} type="file" name={name} accept="image/*" required />
    </div>
  );
};

export default ImageInput;
