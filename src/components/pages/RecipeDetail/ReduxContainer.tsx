import React from "react";
import { useParams } from "react-router-dom";
import {
  useIsRecipeLoading,
  useRecipeDetailData,
} from "../../../store/recipeDetail/useSelectors";
import RecipeDetail from "./RecipeDetail";
import { useDeleteRecipeById } from "../../../store/recipeDetail/useActions";
import {useErrorMessage} from "../../../store/errors/useSelectors";

const ReduxContainer = () => {
  const { recipeId } = useParams<{ recipeId: string }>();
  const detailData = useRecipeDetailData(recipeId);
  const isLoading = useIsRecipeLoading();
  const errorMessage = useErrorMessage();

  const deleteRecipeById = useDeleteRecipeById();

  return (
    <RecipeDetail
      detailData={detailData}
      isLoading={isLoading}
      deleteRecipe={deleteRecipeById}
      errorMessage={errorMessage}
    />
  );
};

export default ReduxContainer;
