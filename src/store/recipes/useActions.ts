import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { fetchAllRecipesThunk } from "./thunks";

export const useFetchRecipes = () => {
  const dispatch = useDispatch();
  return useCallback(() => dispatch(fetchAllRecipesThunk()), [dispatch]);
};
