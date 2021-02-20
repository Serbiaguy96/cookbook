import React from "react";
import { useIntl } from "react-intl";
import { useHistory } from "react-router-dom";
import {
  BackButton,
  ErrorIcon,
  MessageContainer,
  MessageText,
  CheckIcon,
} from "./styles";
import {MainContentContainer} from "../../../global/globalStyles";

export type MessageLayoutProps = {
  eraseError: () => void;
  message: string;
  error?: boolean;
};

const MessageLayout = ({ eraseError, message, error }: MessageLayoutProps) => {
  const { formatMessage } = useIntl();
  const { push } = useHistory();

  const handleClick = () => {
    eraseError();
    push("/");
  };

  return (
    <MainContentContainer>
      <MessageContainer>
        {error ? <ErrorIcon /> : <CheckIcon />}
        <MessageText>{message}</MessageText>
        <BackButton onClick={handleClick}>
          {formatMessage({ id: "success.back" })}
        </BackButton>
      </MessageContainer>
    </MainContentContainer>
  );
};

export default MessageLayout;
