import React, { useEffect, useState } from "react";
import { usePostRecipeRating } from "../../../../store/recipeDetail/useActions";
import { COOKBOOK_SCORES } from "../../../../global/globalConstants";
import { CookBookScores } from "../../../../store/recipeDetail/types";
import RecipeFooter from "./RecipeFooter";

type ReduxContainerProps = {
  recipeId: string;
};

const ReduxContainer = ({ recipeId }: ReduxContainerProps) => {
  const postRecipeRating = usePostRecipeRating();
  const [recipeScore, setRecipeScore] = useState<number | undefined>(undefined);

  useEffect(() => {
    // do localstorage ukladam informaci o tom, ze uzivatel hodnotil recept v ramci jednoho prohlizece
    const RAWcookBookScores = localStorage.getItem(COOKBOOK_SCORES);

    if (RAWcookBookScores) {
      const cookBookScores: CookBookScores = JSON.parse(RAWcookBookScores);
      if (cookBookScores && cookBookScores[recipeId]) {
        setRecipeScore(cookBookScores[recipeId]);
      }
    }
  }, [recipeId]);

  const handleRecipeRating = (newScore: number) => {
    if (!recipeScore) {
      setRecipeScore(newScore);
      postRecipeRating(recipeId, newScore);
    }
  };

  return (
    <RecipeFooter handleRecipeRating={handleRecipeRating} score={recipeScore} />
  );
};

export default ReduxContainer;
