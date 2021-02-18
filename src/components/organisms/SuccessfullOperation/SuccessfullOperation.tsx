import React from "react";
import { useIntl } from "react-intl";
import { useHistory } from "react-router-dom";
import { BackButton, CheckIcon, MessageContainer, MessageText } from "./styles";

export type SuccessfullOperationProps = {
  successMessage?: string;
  eraseError: () => void;
};

const SuccessfullOperation = ({
  successMessage,
  eraseError,
}: SuccessfullOperationProps) => {
  const { formatMessage } = useIntl();
  const { push } = useHistory();

  const handleClick = () => {
    eraseError();
    push("/");
  }

  return (
    <MessageContainer>
      <CheckIcon />
      <MessageText>
        {successMessage || formatMessage({ id: "success.common" })}
      </MessageText>
      <BackButton onClick={handleClick}>
        {formatMessage({ id: "success.back" })}
      </BackButton>
    </MessageContainer>
  );
};

export default SuccessfullOperation;
