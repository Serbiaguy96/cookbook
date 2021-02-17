import { CookBookThunk } from "../types";
import {
  getAreRecipesLoading,
  getRecipesLimit,
  getRecipesOffset,
} from "./selectors";
import {
  receiveRecipesAction,
  setRecipesAreLoadingAction,
} from "./actionCreators";
import {
  fetchRecipes,
  postRecipe,
} from "../../requests/recipes/requestCreators";
import { eraseErrorAction, receiveErrorAction } from "../errors/actionCreators";
import { Recipe } from "../recipeDetail/types";

export const fetchAllRecipesThunk = (): CookBookThunk => (
  dispatch,
  getState
) => {
  const state = getState();
  const limit = getRecipesLimit(state);
  const offset = getRecipesOffset(state);
  const areLoading = getAreRecipesLoading(state);

  if (areLoading) return;

  dispatch(setRecipesAreLoadingAction(true));
  fetchRecipes(limit, offset)
    .then(({ data }) => {
      dispatch(receiveRecipesAction(data));
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
    .finally(() => dispatch(setRecipesAreLoadingAction(false)));
};

export const createNewRecipeThunk = (recipeData: Recipe): CookBookThunk => (
  dispatch,
  getState
) => {
  dispatch(setRecipesAreLoadingAction(true));
  postRecipe(recipeData)
    .then(({ data }) => {
      dispatch(receiveRecipesAction([data]));
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
    .finally(() => dispatch(setRecipesAreLoadingAction(false)));
};
