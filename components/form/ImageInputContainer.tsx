"use client";
import React, { useState } from "react";
import Image from "next/image";
import { actionForm } from "@/utils/types";
import { Button } from "../ui/button";
import FormContainer from "./FormContainer";
import { Divide } from "lucide-react";
import ImageInput from "./ImageInput";
import Buttons from "./Buttons";

interface ImageInputContainerProps {
  image: string;
  name: string;
  action: actionForm;
  text: string;
  children?: React.ReactNode;
}

const ImageInputContainer = (props: ImageInputContainerProps) => {
  const { image, name, action, text, children } = props;
  const [isUpdateFormVisible, setIsUpdateFormVisible] = useState(false);

  return (
    <div>
      <Image
        src={image}
        alt={name}
        width={200}
        height={200}
        priority
        className="object-cover h-[200px] w-[200px] rounded-md"
      />
      <Button
        variant="outline"
        size="sm"
        className="mt-4"
        onClick={() => setIsUpdateFormVisible((prev) => !prev)}
      >
        {text}
      </Button>
      {isUpdateFormVisible && (
        <div className="mt-4">
          <FormContainer action={action}>
            {props.children}
            <ImageInput />
            <Buttons text={text} className="mb-4" />
          </FormContainer>
        </div>
      )}
    </div>
  );
};

export default ImageInputContainer;
