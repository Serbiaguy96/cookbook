import React, { FC } from "react";
import cs_messages from "../../assets/localization/cs_messages";
import { StringIndexedDictionary } from "../../global/globalTypes";
import { IntlProvider } from "react-intl";
import { CS_LOCALE } from "../../global/globalConstants";

type LocaleObjectType = {
  [key: string]: StringIndexedDictionary<string>;
};

const localeObject: LocaleObjectType = {
  cs: cs_messages,
};

const ConnectedIntlProvider: FC = ({ children }) => {
  return (
    <IntlProvider locale={CS_LOCALE} messages={localeObject[CS_LOCALE]}>
      {children}
    </IntlProvider>
  );
};

export default ConnectedIntlProvider;
