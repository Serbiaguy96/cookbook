import React from "react";
import { Control, Controller } from "react-hook-form";
import { StyledTextField } from "./index";
import { ControllerContainer, ErrorMessage } from "./styles";

export type ControlledFormInputProps = {
  name: string;
  label: string;
  control: Control;
  defaultValue?: string | number;
  rules?: any;
  error?: string;
  multiline?: boolean;
  type?: string;
};

const FormInput = ({
  name,
  label,
  control,
  defaultValue,
  rules,
  error,
  multiline,
  type,
}: ControlledFormInputProps) => {
  return (
    <ControllerContainer>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        rules={rules}
        render={(props) => (
          <StyledTextField
            {...props}
            label={label}
            multiline={multiline}
            type={type}
          />
        )}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </ControllerContainer>
  );
};

export default FormInput;
