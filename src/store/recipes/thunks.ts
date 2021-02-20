import { CookBookThunk } from "../types";
import {
  getAreRecipesLoading,
  getRecipesLimit,
  getRecipesOffset,
} from "./selectors";
import {
  addRecipesOffsetAction,
  receiveNewRecipesAction,
  receiveRecipesAction,
  setMoreRecipesToLoad,
  setRecipesAreLoadingAction,
  setRecipesOffsetAction,
} from "./actionCreators";
import {
  fetchRecipes,
  postRecipe,
} from "../../requests/recipes/requestCreators";
import { eraseErrorAction, receiveErrorAction } from "../errors/actionCreators";
import { RecipeDTO } from "../recipeDetail/types";

export const fetchInitialRecipesThunk = (): CookBookThunk => (
  dispatch,
  getState
) => {
  const state = getState();
  const limit = getRecipesLimit(state);
  const areLoading = getAreRecipesLoading(state);

  if (areLoading) return;

  dispatch(setRecipesAreLoadingAction(true));
  fetchRecipes(limit, 0)
    .then(({ data }) => {
      dispatch(receiveRecipesAction(data));
      if (data.length < limit) {
        dispatch(setMoreRecipesToLoad(false));
      } else {
        dispatch(setMoreRecipesToLoad(true));
      }
      dispatch(setRecipesOffsetAction(data.length));
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

export const fetchNewRecipesThunk = (): CookBookThunk => (
  dispatch,
  getState
) => {
  const state = getState();
  const limit = getRecipesLimit(state);
  const offset = getRecipesOffset(state);
  const areLoading = getAreRecipesLoading(state);

  if (areLoading) return;

  fetchRecipes(limit, offset)
    .then(({ data }) => {
      dispatch(receiveNewRecipesAction(data));
      if (data.length < limit) {
        dispatch(setMoreRecipesToLoad(false));
      }
      dispatch(addRecipesOffsetAction(data.length));
      dispatch(eraseErrorAction());
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

export const createNewRecipeThunk = (recipeData: RecipeDTO): CookBookThunk => (
  dispatch
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
