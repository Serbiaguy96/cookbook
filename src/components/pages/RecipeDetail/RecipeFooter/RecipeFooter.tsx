import React from "react";
import {
  RecipeFooterContainer,
  RecipeFooterSpan,
  StarsContainer,
} from "./styles";
import { useIntl } from "react-intl";
import ScoreStars from "../../../atoms/ScoreStars";
import { LARGE } from "../../../atoms/ScoreStars/constants";

export type RecipeFooterProps = {
  handleRecipeRating: (newScore: number) => void;
  score: number | undefined;
};

const RecipeFooter = ({ handleRecipeRating, score }: RecipeFooterProps) => {
  const { formatMessage } = useIntl();
  return (
    <RecipeFooterContainer>
      <RecipeFooterSpan>
        {formatMessage({ id: "recipe.detail.rating" })}
      </RecipeFooterSpan>
      <StarsContainer>
        <ScoreStars
          score={score || 0}
          starsColor="#ffffff"
          disabled={score !== undefined}
          handleStarClick={handleRecipeRating}
          starsSize={LARGE}
        />
      </StarsContainer>
    </RecipeFooterContainer>
  );
};

export default RecipeFooter;
