import React from "react";
import {
  Recipe,
  RecipeDTO,
  UpdateRecipeDTO,
} from "../../../store/recipeDetail/types";
import { RecipeUpdateData } from "../../../requests/recipeDetail/types";
import { ErrorMessage } from "../../../store/errors/types";
import { CreateRecipeContainer } from "../CreateRecipe/styles";
import { CreateRecipeHeader } from "../../atoms/headers";
import RecipeForm from "../../organisms/RecipeForm";
import Loader from "../../atoms/Loader";
import SuccessfullyUpdated from "../SuccessfullyUpdated";

export type UpdateRecipeProps = {
  recipeData: Recipe | null;
  isLoading: boolean;
  updateRecipe: (recipeId: string, updateData: RecipeUpdateData) => void;
  errorMessage: ErrorMessage | null;
};

const UpdateRecipe = ({
  recipeData,
  errorMessage,
  isLoading,
  updateRecipe,
}: UpdateRecipeProps) => {
  if (isLoading || !recipeData) return <Loader size={50} />;

  if (errorMessage?.statusCode === 200 || errorMessage?.statusCode === 204) {
    return <SuccessfullyUpdated />;
  }

  const updateData: RecipeDTO = {
    name: recipeData.name,
    description: recipeData.description,
    info: recipeData.info,
    duration: recipeData.duration,
    ingredients: recipeData.ingredients,
  };

  const hackTypeScript = (data: RecipeDTO | UpdateRecipeDTO) => {
    updateRecipe(recipeData.id, data as UpdateRecipeDTO);
  };

  return (
    <CreateRecipeContainer>
      <CreateRecipeHeader />
      <RecipeForm submitAction={hackTypeScript} recipeData={updateData} />
    </CreateRecipeContainer>
  );
};

export default UpdateRecipe;
