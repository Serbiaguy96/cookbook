import {
  AddRecipesOffsetAction,
  ReceiveNewRecipesAction,
  ReceiveRecipesAction,
  RecipesList,
  SetMoreRecipesToLoadAction,
  SetRecipesAreLoading,
  SetRecipesLimit,
  SetRecipesOffsetAction,
} from "./types";
import {
  ADD_RECIPES_OFFSET,
  RECEIVE_NEW_RECIPES,
  RECEIVE_RECIPES,
  RECIPES_ARE_LOADING,
  SET_MORE_RECIPES_TO_LOAD,
  SET_RECIPES_LIMIT,
  SET_RECIPES_OFFSET,
} from "./actionTypes";

export const receiveRecipesAction = (
  recipes: RecipesList
): ReceiveRecipesAction => ({
  type: RECEIVE_RECIPES,
  payload: { recipes },
});

export const receiveNewRecipesAction = (
  recipes: RecipesList
): ReceiveNewRecipesAction => ({
  type: RECEIVE_NEW_RECIPES,
  payload: { recipes },
});

export const setRecipesAreLoadingAction = (
  flag: boolean
): SetRecipesAreLoading => ({
  type: RECIPES_ARE_LOADING,
  payload: { flag },
});

export const setRecipesLimitAction = (limit: number): SetRecipesLimit => ({
  type: SET_RECIPES_LIMIT,
  payload: { limit },
});

export const setRecipesOffsetAction = (
  offset: number
): SetRecipesOffsetAction => ({
  type: SET_RECIPES_OFFSET,
  payload: { offset },
});

export const setMoreRecipesToLoad = (
  flag: boolean
): SetMoreRecipesToLoadAction => ({
  type: SET_MORE_RECIPES_TO_LOAD,
  payload: { flag },
});

export const addRecipesOffsetAction = (
  offset: number
): AddRecipesOffsetAction => ({
  type: ADD_RECIPES_OFFSET,
  payload: { offset },
});
