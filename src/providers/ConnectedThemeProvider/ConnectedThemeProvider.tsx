import React, { FC } from "react";
import { ThemeProvider } from "@emotion/react";
import { APP_COLORS } from "../../global/globalConstants";

const ConnectedThemeProvider: FC = ({ children }) => {
  return (
    <ThemeProvider theme={{ colors: APP_COLORS }}>{children}</ThemeProvider>
  );
};

export default ConnectedThemeProvider;
