import { Controller, useFormContext } from "react-hook-form";
import TextField from "@mui/material/TextField";
// import { FormInputProps } from "./FormInputProps";
import { getErrorMessageByPropertyName } from "@/utils/getErrorMessage";

interface FormInputProps {
  name: string;
  label: string;
  size?: "medium" | "small";
  variant?: "filled" | "outlined" | "standard";
  value?: string | undefined;
  placeholder?: string;
  required?: boolean;
}

export const FormInputText = ({
  name,
  label,
  size = "medium",
  variant = "outlined" /* control, */,
  value,
  placeholder,
  required = false,
}: FormInputProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const errorMessage = getErrorMessageByPropertyName(errors, name);
  console.log(errors, errorMessage);
  

  return (
    <Controller
      name={name}
      control={control}
      render={({
        field,
        // fieldState: { error },
        // formState,
      }) => (
        <TextField
          helperText={errorMessage ? errorMessage : null}
          size={size}
          error={!!errorMessage}
          fullWidth
          label={label}
          variant={variant}
          placeholder={placeholder}
          sx={{ marginTop: 2 }}
          {...field}
          value={value ? value : field.value|| ""}
          required={required}
        />
      )}
    />
  );
};
