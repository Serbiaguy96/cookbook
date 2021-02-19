import React from "react";
import {useIntl} from "react-intl";
import MessageLayout from "../../organisms/MessageLayout";


const PageNotFound = () => {
  const { formatMessage } = useIntl();
  return (
    <MessageLayout message={formatMessage({ id: "error.404" })} error />
  );
};

export default PageNotFound;
