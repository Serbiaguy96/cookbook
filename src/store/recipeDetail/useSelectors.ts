import { useSelector } from "react-redux";
import { getIsRecipeLoading, getRecipeMetadata } from "./selectors";
import { useFetchRecipeById } from "./useActions";
import { useEffect } from "react";

export const useRecipeDetailData = (recipeId: string) => {
  const recipeDetail = useSelector(getRecipeMetadata);
  const fetchRecipeById = useFetchRecipeById();

  useEffect(() => {
    if (!recipeDetail) {
      fetchRecipeById(recipeId);
    }
  }, [recipeDetail, fetchRecipeById]);

  return recipeDetail;
};

export const useIsRecipeLoading = () => useSelector(getIsRecipeLoading);
