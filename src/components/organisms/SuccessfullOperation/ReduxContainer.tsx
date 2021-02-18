import React from "react";
import { useEraseError } from "../../../store/errors/useActions";
import SuccessfullOperation from "./SuccessfullOperation";

export type ReduxContainerProps = {
  successMessage?: string;
};

const ReduxContainer = ({ successMessage }: ReduxContainerProps) => {
  const eraseError = useEraseError();
  return (
    <SuccessfullOperation
      eraseError={eraseError}
      successMessage={successMessage}
    />
  );
};

export default ReduxContainer;
