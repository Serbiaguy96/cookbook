import {
  EraseRecipeAction,
  ReceiveRecipeAction,
  Recipe,
  SetRecipeLoadingAction,
} from "./types";
import { ERASE_RECIPE, IS_RECIPE_LOADING, RECEIVE_RECIPE } from "./actionTypes";

export const receiveRecipeAction = (
  recipe: Recipe | null
): ReceiveRecipeAction => ({
  type: RECEIVE_RECIPE,
  payload: { recipe },
});

export const setRecipeIsLoadingAction = (flag: boolean): SetRecipeLoadingAction => ({
  type: IS_RECIPE_LOADING,
  payload: { flag },
});

export const eraseRecipeAction = (): EraseRecipeAction => ({
  type: ERASE_RECIPE,
});
