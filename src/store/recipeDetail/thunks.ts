import { CookBookThunk } from "../types";
import { getIsRecipeLoading } from "./selectors";
import {
  receiveRecipeAction,
  setRecipeIsLoadingAction,
} from "./actionCreators";
import {
  deleteRecipeById,
  fetchRecipeById,
  updateRecipeById,
} from "../../requests/recipeDetail/requestCreators";
import { eraseErrorAction, receiveErrorAction } from "../errors/actionCreators";
import { RecipeUpdateData } from "../../requests/recipeDetail/types";

export const fetchRecipeByIdThunk = (recipeId: string): CookBookThunk => (
  dispatch,
  getState
) => {
  const state = getState();
  const isLoading = getIsRecipeLoading(state);

  if (isLoading) return;

  dispatch(setRecipeIsLoadingAction(true));
  fetchRecipeById(recipeId)
    .then(({ data }) => {
      dispatch(receiveRecipeAction(data));
      dispatch(eraseErrorAction());
    })
    .catch(({ response }) => {
      dispatch(
        receiveErrorAction({
          statusCode: response.status,
          message: response.data,
        })
      );
    })
    .finally(() => dispatch(setRecipeIsLoadingAction(false)));
};

export const updateRecipeByIdThunk = (
  recipeId: string,
  recipeData: RecipeUpdateData
): CookBookThunk => (dispatch, getState) => {
  dispatch(setRecipeIsLoadingAction(true));
  updateRecipeById(recipeId, recipeData)
    .then(() => {
      dispatch(receiveErrorAction({ statusCode: 200, message: "OK" }));
    })
    .catch(({ response }) => {
      dispatch(
        receiveErrorAction({
          statusCode: response.status,
          message: response.data,
        })
      );
    })
    .finally(() => dispatch(setRecipeIsLoadingAction(false)));
};

export const deleteRecipeByIdThunk = (recipeId: string): CookBookThunk => (
  dispatch,
  getState
) => {
  dispatch(setRecipeIsLoadingAction(true));
  deleteRecipeById(recipeId)
    .then(() => {
      dispatch(receiveErrorAction({ statusCode: 204, message: "OK" }));
    })
    .catch(({ response }) => {
      dispatch(
        receiveErrorAction({
          statusCode: response.status,
          message: response.data,
        })
      );
    })
    .finally(() => dispatch(setRecipeIsLoadingAction(false)));
};
