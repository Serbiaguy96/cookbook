import axiosWrapper from "../axiosWrapper";
import { RecipesList } from "../../store/recipes/types";
import { getRecipesUrl, postRecipeUrl } from "./urlParsers";
import { Recipe } from "../../store/recipeDetail/types";

export const fetchRecipes = (limit?: number, offset?: number) =>
  axiosWrapper<RecipesList>({
    url: getRecipesUrl(limit || 10, offset || 0),
    method: "GET",
  });

export const postRecipe = (recipe: Recipe) =>
  axiosWrapper<Recipe>({
    url: postRecipeUrl(),
    method: "POST",
  });
