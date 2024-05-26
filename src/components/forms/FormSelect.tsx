import { Controller, useFormContext } from "react-hook-form";
import { getErrorMessageByPropertyName } from "@/utils/getErrorMessage";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

interface FormSelectProps {
  name: string;
  label: string;
  size?: "medium" | "small";
  variant?: "filled" | "outlined" | "standard";
  value?: string | undefined;
  selectOptions: { label: string; value: string }[];
  required?: boolean;
  fullWidth?:boolean;
}

export const FormSelect = ({
  name,
  label,
  size = "medium",
  variant = "outlined",
  value,
  selectOptions,
  required = false,
  fullWidth=false,
}: FormSelectProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  // console.log(errors);
  const errorMessage = getErrorMessageByPropertyName(errors, name);

  return (
    <Controller
      name={name}
      control={control}
      render={({
        field,
        // fieldState: { error },
        // formState,
      }) => (
        <FormControl
          variant={variant}
          fullWidth={fullWidth}
          sx={{ minWidth: 120, marginTop:2 }} size={size}
          required={required}
        >
          <InputLabel id={name}>{label ? label : null}</InputLabel>
          <Select
            labelId={name}
            id={name}
            label={label}
            {...field}
            value={value ? value : field.value || ""}
          >
            {selectOptions?.map(({ label, value }) => (
              <MenuItem key={value} value={value}>
                {label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    />
  );
};
