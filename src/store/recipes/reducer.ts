import { RecipesActionsTypes, RecipesState } from "./types";
import {
  ADD_RECIPES_OFFSET,
  RECEIVE_NEW_RECIPES,
  RECEIVE_RECIPES,
  RECIPES_ARE_LOADING,
  SET_MORE_RECIPES_TO_LOAD,
  SET_RECIPES_LIMIT,
  SET_RECIPES_OFFSET,
} from "./actionTypes";

const initialState: RecipesState = {
  recipesList: [],
  areLoading: false,
  limit: 10,
  offset: 0,
  moreRecipesToLoad: true,
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
    case SET_RECIPES_OFFSET:
      return {
        ...state,
        offset: action.payload.offset,
      };
    case ADD_RECIPES_OFFSET:
      return {
        ...state,
        offset: state.offset + action.payload.offset,
      };
    case SET_MORE_RECIPES_TO_LOAD:
      return {
        ...state,
        moreRecipesToLoad: action.payload.flag,
      };
    default:
      return state;
  }
};

export default recipesReducer;
