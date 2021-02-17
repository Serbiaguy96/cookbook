import { RootState as RS } from "../types";
import { RecipesList, RecipesState } from "./types";

const getRecipesSlice = (state: RS): RecipesState => state.recipes;

export const getRecipesList = (state: RS): RecipesList =>
  getRecipesSlice(state).recipesList;

export const getAreRecipesLoading = (state: RS): boolean =>
  getRecipesSlice(state).areLoading;

export const getRecipesLimit = (state: RS): number =>
  getRecipesSlice(state).limit;

export const getRecipesOffset = (state: RS): number =>
  getRecipesSlice(state).offset;
