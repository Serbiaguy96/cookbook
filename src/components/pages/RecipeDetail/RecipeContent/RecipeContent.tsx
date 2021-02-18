import React from "react";
import {
  ContentContainer,
  ContentTitle,
  InfoParagraph,
  IngredientsList,
} from "./styles";
import { useIntl } from "react-intl";

export type RecipeContentProps = {
  description: string;
  ingredients: string[];
  info: string;
};

const RecipeContent = ({
  description,
  info,
  ingredients,
}: RecipeContentProps) => {
  const { formatMessage } = useIntl();

  const forAllIngredients = (ingredient: string, index: number) => (
    <li key={index}>{ingredient}</li>
  );

  return (
    <ContentContainer>
      <InfoParagraph>{info}</InfoParagraph>
      <ContentTitle>
        {formatMessage({ id: "recipe.add.ingredients" })}
      </ContentTitle>
      <IngredientsList>
        {ingredients.map(forAllIngredients)}
      </IngredientsList>
      <ContentTitle>
        {formatMessage({ id: "recipe.detail.prepare" })}
      </ContentTitle>
      <InfoParagraph>{description}</InfoParagraph>
    </ContentContainer>
  );
};

export default RecipeContent;
