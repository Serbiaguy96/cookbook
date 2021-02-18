import { useDispatch } from "react-redux";
import { useCallback } from "react";
import {
  createNewRecipeThunk,
  fetchInitialRecipesThunk,
  fetchNewRecipesThunk,
} from "./thunks";
import { RecipeDTO } from "../recipeDetail/types";

export const useFetchRecipes = () => {
  const dispatch = useDispatch();
  return useCallback(() => dispatch(fetchNewRecipesThunk()), [dispatch]);
};

export const useInitialFetchRecipes = () => {
  const dispatch = useDispatch();
  return useCallback(() => dispatch(fetchInitialRecipesThunk()), [dispatch]);
};

export const usePostNewRecipe = () => {
  const dispatch = useDispatch();
  return useCallback(
    (recipeData: RecipeDTO) => dispatch(createNewRecipeThunk(recipeData)),
    [dispatch]
  );
};
