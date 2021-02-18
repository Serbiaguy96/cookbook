import React, { forwardRef } from "react";
import { TextFieldProps, withStyles } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { numberFieldStyles, textFieldStyles } from "./styles";

export const StyledText = withStyles(textFieldStyles)(TextField);
export const StyledNumber = withStyles(numberFieldStyles)(TextField);

const StyledTextField = forwardRef((props: TextFieldProps, ref) => {
  if (props.type === "number")
    return <StyledNumber {...props} inputRef={ref} />;

  return <StyledText {...props} inputRef={ref} />;
});

export default StyledTextField;
