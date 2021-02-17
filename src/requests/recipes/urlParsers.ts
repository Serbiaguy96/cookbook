export const getRecipesUrl = (limit: number, offset: number) => `api/v1/recipes?limit=${limit}&offset=${offset}`;

export const postRecipeUrl = () => "api/v1/recipes";
