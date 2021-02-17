import {RecipeDetailActionsTypes, RecipeDetailState} from "./types";
import {ERASE_RECIPE, IS_RECIPE_LOADING, RECEIVE_RECIPE} from "./actionTypes";

const initialState: RecipeDetailState = {
  recipeMetadata: null,
  isLoading: false,
};

const recipeDetailReducer = (
  state = initialState,
  action: RecipeDetailActionsTypes
): RecipeDetailState => {
  switch (action.type) {
    case RECEIVE_RECIPE:
      return {
        ...state,
        recipeMetadata: action.payload.recipe,
      };
    case IS_RECIPE_LOADING:
      return {
        ...state,
        isLoading: action.payload.flag,
      };
    case ERASE_RECIPE:
      return {
        ...state,
        recipeMetadata: null,
      }
    default:
      return state;
  }
};

export default recipeDetailReducer;
