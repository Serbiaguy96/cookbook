import React from "react";
import { AddIcon, HeaderContainer, HeaderText } from "./styles";
import { useIntl } from "react-intl";
import { useHistory } from "react-router-dom";

const RecipesHeader = () => {
  const { push } = useHistory();
  const { formatMessage } = useIntl();

  return (
    <HeaderContainer>
      <HeaderText>{formatMessage({ id: "common.recipes" })}</HeaderText>
      <AddIcon onClick={() => push("/new-recipe")} />
    </HeaderContainer>
  );
};

export default RecipesHeader;
