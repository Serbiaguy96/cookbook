import React from "react";
import { useIntl } from "react-intl";
import MessageLayout from "../../../organisms/MessageLayout";

const CommonSuccess = () => {
  const { formatMessage } = useIntl();
  return <MessageLayout message={formatMessage({ id: "success.common" })} />;
};

export default CommonSuccess;
