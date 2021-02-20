import React, { useEffect } from "react";
import {
  useAreRecipesLoading,
  useMoreRecipesToLoad,
  useRecipesData,
} from "../../../store/recipes/useSelectors";
import Recipes from "./Recipes";
import {
  useFetchRecipes,
  useInitialFetchRecipes,
} from "../../../store/recipes/useActions";

const ReduxContainer = () => {
  const allRecipes = useRecipesData();
  const areRecipesLoading = useAreRecipesLoading();
  const fetchRecipes = useInitialFetchRecipes();
  const fetchMoreRecipes = useFetchRecipes();
  const moreRecipesToLoad = useMoreRecipesToLoad();

  useEffect(() => {
    fetchRecipes();
  }, [fetchRecipes]);

  return (
    <Recipes
      recipes={allRecipes}
      areRecipesLoading={areRecipesLoading}
      fetchMoreRecipes={fetchMoreRecipes}
      moreRecipesToLoad={moreRecipesToLoad}
    />
  );
};

export default ReduxContainer;
