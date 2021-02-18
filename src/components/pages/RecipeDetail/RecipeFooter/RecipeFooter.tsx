import React from "react";
import {
  RecipeFooterContainer,
  RecipeFooterSpan,
  StarsContainer,
} from "./styles";
import { useIntl } from "react-intl";
import ScoreStars from "../../../atoms/ScoreStars";

export type RecipeFooterProps = {
  handleRecipeRating: (newScore: number) => void;
  score: number | undefined;
};

const RecipeFooter = ({ handleRecipeRating, score }: RecipeFooterProps) => {
  const { formatMessage } = useIntl();
  const rated = score !== undefined;
  return (
    <RecipeFooterContainer>
      <RecipeFooterSpan>
        {rated
          ? formatMessage({ id: "recipe.detail.rated" })
          : formatMessage({ id: "recipe.detail.rating" })}
      </RecipeFooterSpan>
      <StarsContainer>
        <ScoreStars
          score={score || 0}
          starsColor="#ffffff"
          disabled={rated}
          handleStarClick={handleRecipeRating}
          starsSize={40}
        />
      </StarsContainer>
    </RecipeFooterContainer>
  );
};

export default RecipeFooter;
