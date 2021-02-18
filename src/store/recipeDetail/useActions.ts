import { useDispatch } from "react-redux";
import { useCallback } from "react";
import {
  deleteRecipeByIdThunk,
  fetchRecipeByIdThunk,
  postRecipeRatingThunk,
  updateRecipeByIdThunk,
} from "./thunks";
import { RecipeUpdateData } from "../../requests/recipeDetail/types";

export const useFetchRecipeById = () => {
  const dispatch = useDispatch();
  return useCallback(
    (recipeId: string) => dispatch(fetchRecipeByIdThunk(recipeId)),
    [dispatch]
  );
};

export const useUpdateRecipeById = () => {
  const dispatch = useDispatch();
  return useCallback(
    (recipeId: string, data: RecipeUpdateData) =>
      dispatch(updateRecipeByIdThunk(recipeId, data)),
    [dispatch]
  );
};

export const useDeleteRecipeById = () => {
  const dispatch = useDispatch();
  return useCallback(
    (recipeId: string) => dispatch(deleteRecipeByIdThunk(recipeId)),
    [dispatch]
  );
};

export const usePostRecipeRating = () => {
  const dispatch = useDispatch();
  return useCallback(
    (recipeId: string, score: number) =>
      dispatch(postRecipeRatingThunk(recipeId, score)),
    [dispatch]
  );
};
