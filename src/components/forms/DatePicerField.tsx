import { Controller, useFormContext } from "react-hook-form";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { FormInputProps } from "./FormInputProps";
import { getErrorMessageByPropertyName } from "@/utils/getErrorMessage";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs from "dayjs";

interface FormInputProps {
  name: string;
  label: string;
  size?: "medium" | "small";
  variant?: "filled" | "outlined" | "standard";
  value?: string | undefined;
  placeholder?: string;
  required?: boolean;
}

export const DatePickerField = ({
  name,
  label,
  size = "medium",
  variant = "outlined" /* control, */,
  value,
  required = false,
}: FormInputProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const errorMessage = getErrorMessageByPropertyName(errors, name);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Controller
        name={name}
        control={control}
        defaultValue={dayjs().startOf("D")}
        render={({
          field,
          // fieldState: { error },
          // formState,
        }) => (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
              label={label}
              slotProps={{
                textField: {
                  fullWidth: true,
                  size: size,
                  variant: variant,
                  required: required,
                  error: false,
                  sx: { marginTop: 2 },
                },
              }}
              {...field}
              inputRef={field.ref}
              value={value ? dayjs(value) : dayjs(field.value) || null}
            />
          </LocalizationProvider>
        )}
      />
    </LocalizationProvider>
  );
};
