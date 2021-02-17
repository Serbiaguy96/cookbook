import React from "react";
import {RecipeListItem} from "../../../store/recipes/types";
import {RecipeContentContainer, RecipeContentHeader, RecipeItemContainer, RecipeSmallImage} from "./styles";
import small_plate from "../../../assets/images/small_plate.png";

export type RecipeItemProps = RecipeListItem & {
  key: number;
};

const RecipeItem = ({name, id, key, duration, score}: RecipeItemProps) => {
  return (
    <RecipeItemContainer key={key}>
      <RecipeSmallImage src={small_plate} alt="small-plate" />
      <RecipeContentContainer>
        <RecipeContentHeader>{name}</RecipeContentHeader>
        <span>{score}</span>
        <span>{duration}</span>
      </RecipeContentContainer>
    </RecipeItemContainer>
  );
};

export default RecipeItem;
