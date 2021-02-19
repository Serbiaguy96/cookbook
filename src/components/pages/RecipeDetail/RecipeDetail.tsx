import React from "react";
import { Recipe } from "../../../store/recipeDetail/types";
import Loader from "../../atoms/Loader";
import RecipeHeader from "./RecipeHeader";
import RecipeContent from "./RecipeContent";
import { RecipeDetailContainer } from "./styles";
import RecipeFooter from "./RecipeFooter";
import { ErrorMessage } from "../../../store/errors/types";
import CommonSuccess from "../CommonSuccess";

export type RecipeDetailProps = {
  detailData: Recipe | null;
  isLoading: boolean;
  deleteRecipe: (recipeId: string) => void;
  errorMessage: ErrorMessage | null;
};

const RecipeDetail = ({
  detailData,
  isLoading,
  deleteRecipe,
  errorMessage,
}: RecipeDetailProps) => {
  if (isLoading || !detailData) return <Loader size={50} />;

  const {
    name,
    score,
    duration,
    id,
    description,
    info,
    ingredients,
  } = detailData;

  if (errorMessage?.statusCode === 200 || errorMessage?.statusCode === 204) {
    return <CommonSuccess />;
  }

  return (
    <RecipeDetailContainer>
      <RecipeHeader
        name={name}
        score={score}
        duration={duration}
        id={id}
        deleteRecipe={() => deleteRecipe(id)}
      />
      <RecipeContent
        description={description}
        ingredients={ingredients}
        info={info}
      />
      <RecipeFooter recipeId={id} />
    </RecipeDetailContainer>
  );
};

export default RecipeDetail;
