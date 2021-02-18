import React from "react";
import {DeleteIcon, IngredientContainer, IngredientInput } from "./styles";
import { useIntl } from "react-intl";

export type IngredientProps = {
  ingredient: string;
  index: number;
  deleteIngredient: () => void;
  updateIngredient: (text: string) => void;
};

const Ingredient = ({
  ingredient,
  index,
  deleteIngredient,
  updateIngredient,
}: IngredientProps) => {
  const { formatMessage } = useIntl();
  return (
    <IngredientContainer key={index}>
      <IngredientInput
        value={ingredient}
        onChange={(e) => updateIngredient(e.target.value)}
        placeholder={formatMessage({ id: "recipe.add.your_ingredients"})}
      />
      <DeleteIcon onClick={deleteIngredient}/>
    </IngredientContainer>
  );
};

export default Ingredient;
