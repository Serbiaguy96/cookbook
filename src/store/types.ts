import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
import { RecipesState } from "./recipes/types";
import { RecipeDetailState } from "./recipeDetail/types";
import {ErrorState} from "./errors/types";

export interface RootState {
  recipes: RecipesState;
  recipeDetail: RecipeDetailState;
  error: ErrorState;
}

export type CookBookThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action
>;
