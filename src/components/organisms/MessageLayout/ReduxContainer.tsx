import React from "react";
import { useEraseError } from "../../../store/errors/useActions";
import MessageLayout from "./MessageLayout";

export type ReduxContainerProps = {
  error?: boolean;
  message: string;
};

const ReduxContainer = ({ error, message }: ReduxContainerProps) => {
  const eraseError = useEraseError();
  return (
    <MessageLayout eraseError={eraseError} message={message} error={error} />
  );
};

export default ReduxContainer;
