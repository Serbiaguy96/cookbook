import { useSelector } from "react-redux";
import { getAreRecipesLoading, getRecipesList } from "./selectors";

export const useRecipesData = () => useSelector(getRecipesList);

export const useAreRecipesLoading = () => useSelector(getAreRecipesLoading);
