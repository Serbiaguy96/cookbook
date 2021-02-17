import axiosWrapper from "../axiosWrapper";
import { Recipe } from "../../store/recipeDetail/types";
import { deleteRecipeUrl, getRecipeUrl, updateRecipeUrl } from "./urlParsers";
import { RecipeUpdateData } from "./types";

export const fetchRecipeById = (recipeId: string) =>
  axiosWrapper<Recipe>({
    url: getRecipeUrl(recipeId),
    method: "GET",
  });

export const updateRecipeById = (recipeId: string, data: RecipeUpdateData) =>
  axiosWrapper<Recipe>({
    url: updateRecipeUrl(recipeId),
    method: "PATCH",
    data: {
      ...data,
    },
  });

export const deleteRecipeById = (recipeId: string) =>
  axiosWrapper<void>({
    url: deleteRecipeUrl(recipeId),
    method: "DELETE",
  });
