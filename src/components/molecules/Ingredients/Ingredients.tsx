import React, { useCallback } from "react";
import {
  AddIcon,
  AddIngrButton,
  AddSpan,
  IngredientsContainer,
  IngredientsTitle,
} from "./styles";
import { useIntl } from "react-intl";
import Ingredient from "./Ingredient";

export type IngredientsProps = {
  ingredients: string[];
  updateIngredients: (newIngredients: string[]) => void;
};

const Ingredients = ({ ingredients, updateIngredients }: IngredientsProps) => {
  const { formatMessage } = useIntl();

  const addNewIngredient = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    updateIngredients([...ingredients, ""]);
  };

  const deleteIngredient = useCallback(
    (index: number) =>
      updateIngredients(ingredients.filter((i, n) => n !== index)),
    [ingredients, updateIngredients]
  );

  const updateIngredient = useCallback(
    (index: number, text: string) => {
      const arrToUpdate = [...ingredients];
      arrToUpdate[index] = text;
      updateIngredients(arrToUpdate);
    },
    [ingredients, updateIngredients]
  );

  const forEachIngredient = (ingredient: string, index: number) => (
    <Ingredient
      ingredient={ingredient}
      index={index}
      deleteIngredient={() => deleteIngredient(index)}
      updateIngredient={(text: string) => updateIngredient(index, text)}
    />
  );

  return (
    <IngredientsContainer>
      <IngredientsTitle>
        {formatMessage({ id: "recipe.add.ingredients" })}
      </IngredientsTitle>
      {ingredients.map(forEachIngredient)}
      <AddIngrButton type="button" onClick={addNewIngredient}>
        <AddIcon />
        <AddSpan>{formatMessage({ id: "common.add" })}</AddSpan>
      </AddIngrButton>
    </IngredientsContainer>
  );
};

export default Ingredients;
