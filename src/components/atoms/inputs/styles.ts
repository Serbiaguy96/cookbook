import { APP_COLORS } from "../../../global/globalConstants";
import styled from "@emotion/styled";

export const textFieldStyles = {
  root: {
    width: "100%",
    margin: "10px 0 5px 0",
    "& label": {
      fontSize: "16px",
      color: APP_COLORS.thirdColor,
    },
    "& label.Mui-error": {
      color: APP_COLORS.secondaryColor,
    },
    "& label.MuiInputLabel-shrink": {
      fontSize: "14px",
    },
    "& label.Mui-focused": {
      color: APP_COLORS.thirdColor,
      fontSize: "14px",
    },
    "& .MuiInput-underline.Mui-error:after": {
      borderBottomColor: APP_COLORS.secondaryColor,
    },
    "& .MuiInput-underline:before": {
      borderBottom: `1px solid ${APP_COLORS.thirdColor}`,
    },
    "& .MuiInput-underline:hover:before": {
      borderBottom: `1px solid ${APP_COLORS.thirdColor}`,
    },
    "& .MuiInput-underline:after": {
      borderBottom: `2px solid ${APP_COLORS.primaryColor}`,
    },
    "& p.MuiFormHelperText-root.Mui-error": {
      color: APP_COLORS.secondaryColor,
    },
  },
};

export const numberFieldStyles = {
  ...textFieldStyles,
  root: { ...textFieldStyles.root, width: "100px" },
};

export const ControllerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

export const ErrorMessage = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.secondaryColor};
`;
