import React, { Fragment } from "react";
import { Recipe } from "../../../store/recipeDetail/types";
import Loader from "../../atoms/Loader";
import RecipeHeader from "./RecipeHeader";
import RecipeContent from "./RecipeContent";
import { RecipeDetailContainer } from "./styles";
import RecipeFooter from "./RecipeFooter";

export type RecipeDetailProps = {
  detailData: Recipe | null;
  isLoading: boolean;
};

const RecipeDetail = ({ detailData, isLoading }: RecipeDetailProps) => {
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

  return (
    <RecipeDetailContainer>
      <RecipeHeader name={name} score={score} duration={duration} id={id} />
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
