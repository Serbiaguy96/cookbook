import React, { Fragment } from "react";
import { RecipeListItem, RecipesList } from "../../../store/recipes/types";
import Loader from "../../atoms/Loader";
import { RecipesHeader } from "../../atoms/headers";
import { RecipesListContainer } from "./styles";
import RecipeItem from "./RecipeItem";

export type RecipesProps = {
  recipes: RecipesList;
  areRecipesLoading: boolean;
};

const Recipes = ({ recipes, areRecipesLoading }: RecipesProps) => {
  const forAllRecipes = (recipe: RecipeListItem, index: number) => {
    const { name, duration, id, score } = recipe;
    return (
      <RecipeItem
        name={name}
        duration={duration}
        id={id}
        score={score}
        key={index}
      />
    );
  };

  if (areRecipesLoading) return <Loader size={50} />;

  return (
    <Fragment>
      <RecipesHeader />
      {areRecipesLoading ? (
        <Loader size={50} />
      ) : (
        <RecipesListContainer>
          {recipes.map(forAllRecipes)}
        </RecipesListContainer>
      )}
    </Fragment>
  );
};

export default Recipes;
