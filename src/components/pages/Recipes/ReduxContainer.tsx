import React, {useEffect} from "react";
import {
  useAreRecipesLoading,
  useRecipesData,
} from "../../../store/recipes/useSelectors";
import Recipes from "./Recipes";
import {useFetchRecipes} from "../../../store/recipes/useActions";

const ReduxContainer = () => {
  const allRecipes = useRecipesData();
  const areRecipesLoading = useAreRecipesLoading();
  const fetchRecipes = useFetchRecipes();

  useEffect(() => {
    fetchRecipes();
  }, [fetchRecipes]);

  return <Recipes recipes={allRecipes} areRecipesLoading={areRecipesLoading} />;
};

export default ReduxContainer;
