import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { fetchInitialRecipesThunk, fetchNewRecipesThunk } from "./thunks";

export const useFetchRecipes = () => {
  const dispatch = useDispatch();
  return useCallback(() => dispatch(fetchNewRecipesThunk()), [dispatch]);
};

export const useInitialFetchRecipes = () => {
  const dispatch = useDispatch();
  return useCallback(() => dispatch(fetchInitialRecipesThunk()), [dispatch]);
};
