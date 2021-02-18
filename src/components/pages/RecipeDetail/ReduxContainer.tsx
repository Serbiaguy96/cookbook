import React from "react";
import { useParams } from "react-router-dom";
import {
  useIsRecipeLoading,
  useRecipeDetailData,
} from "../../../store/recipeDetail/useSelectors";
import RecipeDetail from "./RecipeDetail";

const ReduxContainer = () => {
  const { recipeId } = useParams<{ recipeId: string }>();
  const detailData = useRecipeDetailData(recipeId);
  const isLoading = useIsRecipeLoading();

  return <RecipeDetail detailData={detailData} isLoading={isLoading} />;
};

export default ReduxContainer;
