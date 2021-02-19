import React from "react";
import { CreateRecipeContainer } from "./styles";
import { CreateRecipeHeader } from "../../atoms/headers";
import RecipeForm from "../../organisms/RecipeForm";
import { RecipeDTO, UpdateRecipeDTO } from "../../../store/recipeDetail/types";
import { ErrorMessage } from "../../../store/errors/types";
import SuccessfullyCreated from "../SuccessfullyCreated";

export type CreateRecipeProps = {
  postNewRecipe: (recipeData: RecipeDTO) => void;
  errorMessage: ErrorMessage | null;
};

const CreateRecipe = ({ postNewRecipe, errorMessage }: CreateRecipeProps) => {
  const hackTypeScript = (data: RecipeDTO | UpdateRecipeDTO) => {
    postNewRecipe(data as RecipeDTO);
  };

  if (errorMessage?.statusCode === 200) {
    return <SuccessfullyCreated />;
  }

  return (
    <CreateRecipeContainer>
      <CreateRecipeHeader />
      <RecipeForm submitAction={hackTypeScript} />
    </CreateRecipeContainer>
  );
};

export default CreateRecipe;
