import { combineReducers } from "redux";
import recipesReducer from "./recipes/reducer";
import recipeDetailReducer from "./recipeDetail/reducer";
import { RootState } from "./types";
import errorReducer from "./errors/reducer";

const rootReducer = combineReducers<RootState>({
  recipes: recipesReducer,
  recipeDetail: recipeDetailReducer,
  error: errorReducer,
});

export default rootReducer;
