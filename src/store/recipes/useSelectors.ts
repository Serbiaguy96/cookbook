import { useSelector } from "react-redux";
import {
  getAreRecipesLoading,
  getMoreRecipesToLoad,
  getRecipesLimit,
  getRecipesList,
} from "./selectors";

export const useRecipesData = () => useSelector(getRecipesList);

export const useAreRecipesLoading = () => useSelector(getAreRecipesLoading);

export const useRecipesLimit = () => useSelector(getRecipesLimit);

export const useMoreRecipesToLoad = () => useSelector(getMoreRecipesToLoad);
