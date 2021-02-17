import {ERASE_RECIPE, IS_RECIPE_LOADING, RECEIVE_RECIPE} from "./actionTypes";

export interface Recipe {
  name: string;
  description: string;
  duration: number;
  ingredients: string[];
  info: string;
  id: string;
  score: number;
}

export interface RecipeDetailState {
  recipeMetadata: Recipe | null;
  isLoading: boolean;
}

export interface ReceiveRecipeAction {
  type: typeof RECEIVE_RECIPE;
  payload: { recipe: Recipe | null };
}

export interface SetRecipeLoadingAction {
  type: typeof IS_RECIPE_LOADING;
  payload: { flag: boolean };
}

export interface EraseRecipeAction {
  type: typeof ERASE_RECIPE;
}

export type RecipeDetailActionsTypes =
  | ReceiveRecipeAction
  | SetRecipeLoadingAction
  | EraseRecipeAction;
