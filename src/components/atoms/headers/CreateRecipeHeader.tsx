import React from "react";
import { useHistory } from "react-router-dom";
import {
  ArrowIcon,
  CheckIcon,
  HeaderContainer,
  HeaderText,
  NoStyledButton,
} from "./styles";
import { useIntl } from "react-intl";

const CreateRecipeHeader = () => {
  const { push } = useHistory();
  const { formatMessage } = useIntl();

  return (
    <HeaderContainer>
      <ArrowIcon onClick={() => push("/")} />
      <HeaderText>{formatMessage({ id: "recipe.add" })}</HeaderText>
      <NoStyledButton type="submit" form="create-recipe-form">
        <CheckIcon />
      </NoStyledButton>
    </HeaderContainer>
  );
};

export default CreateRecipeHeader;
