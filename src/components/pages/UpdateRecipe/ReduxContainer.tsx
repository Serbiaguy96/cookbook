import React from "react";
import { useUpdateRecipeById } from "../../../store/recipeDetail/useActions";
import {
  useIsRecipeLoading,
  useRecipeDetailData,
} from "../../../store/recipeDetail/useSelectors";
import { useParams } from "react-router-dom";
import { useErrorMessage } from "../../../store/errors/useSelectors";
import UpdateRecipe from "./UpdateRecipe";

const ReduxContainer = () => {
  const { recipeId } = useParams<{ recipeId: string }>();
  const updateRecipe = useUpdateRecipeById();
  const detailData = useRecipeDetailData(recipeId);
  const isLoading = useIsRecipeLoading();
  const errorMessage = useErrorMessage();

  return (
    <UpdateRecipe
      recipeData={detailData}
      isLoading={isLoading}
      updateRecipe={updateRecipe}
      errorMessage={errorMessage}
    />
  );
};

export default ReduxContainer;
