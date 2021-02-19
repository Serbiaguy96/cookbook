import {
  ERASE_RECIPE,
  IS_RECIPE_LOADING,
  RECEIVE_RECIPE,
  SET_RECIPE_SCORE,
} from "./actionTypes";
import { StringIndexedDictionary } from "../../global/globalTypes";

export interface Recipe {
  name: string;
  description: string;
  duration: number;
  ingredients: string[];
  info: string;
  id: string;
  score: number;
}

export interface RecipeDTO {
  name: string;
  description: string;
  duration: number;
  ingredients: string[];
  info: string;
}

export interface UpdateRecipeDTO {
  name?: string;
  description?: string;
  duration?: number;
  ingredients?: string[];
  info?: string;
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

export interface SetRecipeScore {
  type: typeof SET_RECIPE_SCORE;
  payload: { score: number };
}

export type RecipeDetailActionsTypes =
  | ReceiveRecipeAction
  | SetRecipeLoadingAction
  | EraseRecipeAction
  | SetRecipeScore;

export type CookBookScores = StringIndexedDictionary<number> | undefined;
