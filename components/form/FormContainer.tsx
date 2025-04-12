"use client";
import { actionForm } from "@/utils/types";
import React, { useEffect } from "react";
import { useFormState } from "react-dom";
import { toast } from "sonner";

const initialState = { message: "" };
const FormContainer = ({
  action,
  children,
}: {
  action: actionForm;
  children: React.ReactNode;
}) => {
  const [state, formAction] = useFormState(action, initialState);

  useEffect(() => {
    if (state.message) {
      toast.message(state.message);
    }
  }, [state]);
  return <form action={formAction}>{children}</form>;
};

export default FormContainer;
