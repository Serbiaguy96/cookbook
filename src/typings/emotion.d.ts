import "@emotion/react";
import { AppColors } from "../providers/ConnectedThemeProvider/types";

declare module "@emotion/react" {
  export interface Theme {
    colors: AppColors;
  }
}
