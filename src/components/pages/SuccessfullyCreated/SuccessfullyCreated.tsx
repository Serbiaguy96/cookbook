import React from "react";
import { useIntl } from "react-intl";
import MessageLayout from "../../organisms/MessageLayout";

const SuccessfullyCreated = () => {
  const { formatMessage } = useIntl();
  return <MessageLayout message={formatMessage({ id: "success.new" })} />;
};

export default SuccessfullyCreated;
