import React from "react";
import { RecipeListItem } from "../../../store/recipes/types";
import {
  RecipeContentContainer,
  RecipeContentHeader,
  RecipeItemContainer,
  RecipeSmallImage,
} from "./styles";
import small_plate from "../../../assets/images/small_plate.png";
import { useHistory } from "react-router-dom";
import ScoreStars from "../../atoms/ScoreStars";
import { APP_COLORS } from "../../../global/globalConstants";
import TimeEntry from "../../atoms/TimeEntry";
import { DARK_THEME } from "../../atoms/TimeEntry/constants";

export type RecipeItemProps = RecipeListItem & {
  index: number;
};

const RecipeItem = ({ name, id, index, duration, score }: RecipeItemProps) => {
  const { push } = useHistory();

  const handleOnRecipeClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    push(`/recipe-detail/${id}`);
  };

  return (
    <RecipeItemContainer key={index} onClick={handleOnRecipeClick}>
      <RecipeSmallImage src={small_plate} alt="small-plate" />
      <RecipeContentContainer>
        <RecipeContentHeader>{name}</RecipeContentHeader>
        <ScoreStars
          score={score}
          starsColor={APP_COLORS.secondaryColor}
          starsSize={16}
          disabled
        />
        <TimeEntry time={duration} theme={DARK_THEME} />
      </RecipeContentContainer>
    </RecipeItemContainer>
  );
};

export default RecipeItem;
