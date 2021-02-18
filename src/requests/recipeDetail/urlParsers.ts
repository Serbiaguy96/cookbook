const getCommonRecipeUrl = (recipeId: string) => `api/v1/recipes/${recipeId}`;

export const getRecipeUrl = (recipeId: string) => getCommonRecipeUrl(recipeId);

export const updateRecipeUrl = (recipeId: string) =>
  getCommonRecipeUrl(recipeId);

export const deleteRecipeUrl = (recipeId: string) =>
  getCommonRecipeUrl(recipeId);

export const postRatingUrl = (recipeId: string) =>
  `${getCommonRecipeUrl(recipeId)}/ratings`;
