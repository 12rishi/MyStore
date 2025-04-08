import { Input } from "../ui/input";
import { Label } from "../ui/label";

type FormInputProps = {
  label?: string;
  name: string;
  type: string;
  defaultValue?: string;
  placeholder?: string;
};

export const FormInput = ({
  label,
  name,
  type,
  defaultValue,
  placeholder,
}: FormInputProps) => {
  return (
    <div className="mb-4">
      <Label htmlFor={name} className="capitalize mb-2">
        {label || name}
      </Label>

      <Input
        type={type}
        name={name}
        defaultValue={defaultValue}
        placeholder={placeholder}
        required
      />
    </div>
  );
};
