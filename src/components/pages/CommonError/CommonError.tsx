import React from "react";
import { useIntl } from "react-intl";
import MessageLayout from "../../organisms/MessageLayout";

const CommonError = () => {
  const { formatMessage } = useIntl();

  return <MessageLayout message={formatMessage({ id: "error.400" })} error />;
};

export default CommonError;
