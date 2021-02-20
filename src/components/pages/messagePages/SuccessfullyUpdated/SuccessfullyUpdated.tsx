import React from "react";
import { useIntl } from "react-intl";
import MessageLayout from "../../../organisms/MessageLayout";

const SuccessfullyUpdated = () => {
  const { formatMessage } = useIntl();
  return <MessageLayout message={formatMessage({ id: "success.edit" })} />;
};

export default SuccessfullyUpdated;
