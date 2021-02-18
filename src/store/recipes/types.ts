import {
  RECEIVE_NEW_RECIPES,
  RECEIVE_RECIPES,
  RECIPES_ARE_LOADING,
  SET_RECIPES_LIMIT,
} from "./actionTypes";

export interface RecipeListItem {
  name: string;
  duration: number;
  id: string;
  score: number;
}

export type RecipesList = RecipeListItem[];

export interface RecipesState {
  recipesList: RecipesList;
  areLoading: boolean;
  limit: number;
  offset: number;
}

export interface ReceiveRecipesAction {
  type: typeof RECEIVE_RECIPES;
  payload: { recipes: RecipesList };
}

export interface ReceiveNewRecipesAction {
  type: typeof RECEIVE_NEW_RECIPES;
  payload: { recipes: RecipesList };
}

export interface SetRecipesAreLoading {
  type: typeof RECIPES_ARE_LOADING;
  payload: { flag: boolean };
}

export interface SetRecipesLimit {
  type: typeof SET_RECIPES_LIMIT;
  payload: { limit: number };
}

export type RecipesActionsTypes =
  | ReceiveRecipesAction
  | ReceiveNewRecipesAction
  | SetRecipesAreLoading
  | SetRecipesLimit;
