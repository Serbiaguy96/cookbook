import { CookBookThunk } from "../types";
import { getIsRecipeLoading, getRecipeMetadata } from "./selectors";
import {
  receiveRecipeAction,
  setRecipeIsLoadingAction,
  setRecipeScore,
} from "./actionCreators";
import {
  deleteRecipeById,
  fetchRecipeById,
  postRecipeRating,
  updateRecipeById,
} from "../../requests/recipeDetail/requestCreators";
import { eraseErrorAction, receiveErrorAction } from "../errors/actionCreators";
import { RecipeUpdateData } from "../../requests/recipeDetail/types";
import { COOKBOOK_SCORES } from "../../global/globalConstants";
import { CookBookScores } from "./types";

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
): CookBookThunk => (dispatch) => {
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
  dispatch
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

export const postRecipeRatingThunk = (
  recipeId: string,
  score: number
): CookBookThunk => (dispatch, getState) => {
  const state = getState();
  const recipeData = getRecipeMetadata(state);
  postRecipeRating(recipeId, score)
    .then(({ data }) => {
      // nastavim novy score do lacalStorage pro konkretni recept v ramci prohlizece
      const RAWcookBookScores = localStorage.getItem(COOKBOOK_SCORES);
      let cookBookScores: CookBookScores;

      if (RAWcookBookScores) {
        cookBookScores = JSON.parse(RAWcookBookScores);
      } else {
        cookBookScores = {};
      }

      localStorage.setItem(
        COOKBOOK_SCORES,
        JSON.stringify({ ...cookBookScores, [recipeId]: data.score })
      );
      if (recipeData && !recipeData.score) {
        dispatch(setRecipeScore(data.score));
      }
    })
    .catch(({ response }) => {
      dispatch(
        receiveErrorAction({
          statusCode: response.status,
          message: response.data,
        })
      );
    });
};
