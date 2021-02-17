import React, { FC } from "react";
import { Route } from "react-router-dom";
import { AppLayoutProps } from "./types";
import { useErrorMessage } from "../../../store/errors/useSelectors";

const ErrorHandler: FC<AppLayoutProps> = ({
  path,
  component: Component,
  ...rest
}) => {
  const errorMessage = useErrorMessage();

  if (errorMessage && errorMessage.statusCode >= 400) return <div>chyba</div>;

  return <Route {...rest} path={path} component={Component} />;
};

export default ErrorHandler;
