import { RecipesActionsTypes, RecipesState } from "./types";
import {
  RECEIVE_NEW_RECIPES,
  RECEIVE_RECIPES,
  RECIPES_ARE_LOADING,
  SET_RECIPES_LIMIT,
} from "./actionTypes";

const initialState: RecipesState = {
  recipesList: [],
  areLoading: false,
  limit: 10,
  offset: 0,
};

const recipesReducer = (
  state = initialState,
  action: RecipesActionsTypes
): RecipesState => {
  switch (action.type) {
    case RECEIVE_RECIPES: {
      const { recipes } = action.payload;
      return {
        ...state,
        recipesList: [...recipes],
      };
    }
    case RECEIVE_NEW_RECIPES: {
      const { recipes } = action.payload;
      return {
        ...state,
        recipesList: [...state.recipesList, ...recipes],
      };
    }
    case RECIPES_ARE_LOADING:
      return {
        ...state,
        areLoading: action.payload.flag,
      };
    case SET_RECIPES_LIMIT:
      return {
        ...state,
        limit: action.payload.limit,
      };
    default:
      return state;
  }
};

export default recipesReducer;
