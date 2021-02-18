import React from "react";
import { CreateRecipeContainer } from "./styles";
import { CreateRecipeHeader } from "../../atoms/headers";
import RecipeForm from "../../organisms/RecipeForm";
import { RecipeDTO, UpdateRecipeDTO } from "../../../store/recipeDetail/types";
import { ErrorMessage } from "../../../store/errors/types";
import SuccessfullOperation from "../../organisms/SuccessfullOperation";
import { useIntl } from "react-intl";

export type CreateRecipeProps = {
  postNewRecipe: (recipeData: RecipeDTO) => void;
  errorMessage: ErrorMessage | null;
};

const CreateRecipe = ({ postNewRecipe, errorMessage }: CreateRecipeProps) => {
  const { formatMessage } = useIntl();

  const hackTypeScript = (data: RecipeDTO | UpdateRecipeDTO) => {
    postNewRecipe(data as RecipeDTO);
  };

  if (errorMessage?.statusCode === 200) {
    return (
      <SuccessfullOperation
        successMessage={formatMessage({ id: "success.new" })}
      />
    );
  }

  return (
    <CreateRecipeContainer>
      <CreateRecipeHeader />
      <RecipeForm submitAction={hackTypeScript} />
    </CreateRecipeContainer>
  );
};

export default CreateRecipe;
