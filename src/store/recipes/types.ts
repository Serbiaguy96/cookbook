import {
  ADD_RECIPES_OFFSET,
  RECEIVE_NEW_RECIPES,
  RECEIVE_RECIPES,
  RECIPES_ARE_LOADING,
  SET_MORE_RECIPES_TO_LOAD,
  SET_RECIPES_LIMIT,
  SET_RECIPES_OFFSET,
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
  moreRecipesToLoad: boolean;
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

export interface SetRecipesOffsetAction {
  type: typeof SET_RECIPES_OFFSET;
  payload: { offset: number };
}

export interface SetMoreRecipesToLoadAction {
  type: typeof SET_MORE_RECIPES_TO_LOAD;
  payload: { flag: boolean };
}

export interface AddRecipesOffsetAction {
  type: typeof ADD_RECIPES_OFFSET;
  payload: { offset: number };
}

export type RecipesActionsTypes =
  | ReceiveRecipesAction
  | ReceiveNewRecipesAction
  | SetRecipesAreLoading
  | SetRecipesLimit
  | SetRecipesOffsetAction
  | AddRecipesOffsetAction
  | SetMoreRecipesToLoadAction;
