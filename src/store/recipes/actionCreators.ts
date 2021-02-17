import {
  ReceiveRecipesAction, RecipesList,
  SetRecipesAreLoading,
  SetRecipesLimit,
} from "./types";
import {
  RECEIVE_RECIPES,
  RECIPES_ARE_LOADING,
  SET_RECIPES_LIMIT,
} from "./actionTypes";

export const receiveRecipesAction = (recipes: RecipesList): ReceiveRecipesAction => ({
  type: RECEIVE_RECIPES,
  payload: { recipes },
});

export const setRecipesAreLoadingAction = (flag: boolean): SetRecipesAreLoading => ({
  type: RECIPES_ARE_LOADING,
  payload: { flag },
});

export const setRecipesLimitAction = (limit: number): SetRecipesLimit => ({
  type: SET_RECIPES_LIMIT,
  payload: { limit },
});
