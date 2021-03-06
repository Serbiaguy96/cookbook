import axiosWrapper from "../axiosWrapper";
import { Recipe } from "../../store/recipeDetail/types";
import {
  deleteRecipeUrl,
  getRecipeUrl,
  postRatingUrl,
  updateRecipeUrl,
} from "./urlParsers";
import { RecipeRatingDTO, RecipeUpdateData } from "./types";

export const fetchRecipeById = (recipeId: string) =>
  axiosWrapper<Recipe>({
    url: getRecipeUrl(recipeId),
    method: "GET",
  });

export const updateRecipeById = (recipeId: string, data: RecipeUpdateData) =>
  axiosWrapper<Recipe>({
    url: updateRecipeUrl(recipeId),
    method: "PUT",
    data: {
      ...data,
    },
  });

export const deleteRecipeById = (recipeId: string) =>
  axiosWrapper<void>({
    url: deleteRecipeUrl(recipeId),
    method: "DELETE",
  });

export const postRecipeRating = (recipeId: string, score: number) =>
  axiosWrapper<RecipeRatingDTO>({
    url: postRatingUrl(recipeId),
    method: "POST",
    data: {
      score,
    },
  });
