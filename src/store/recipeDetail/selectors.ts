import { RootState as RS } from "../types";
import { Recipe, RecipeDetailState } from "./types";

const getRecipeDetailSlice = (state: RS): RecipeDetailState =>
  state.recipeDetail;

export const getRecipeMetadata = (state: RS): Recipe | null =>
  getRecipeDetailSlice(state).recipeMetadata;

export const getIsRecipeLoading = (state: RS): boolean =>
  getRecipeDetailSlice(state).isLoading;
