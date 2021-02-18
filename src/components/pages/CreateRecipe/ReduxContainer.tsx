import React from "react";
import CreateRecipe from "./CreateRecipe";
import { usePostNewRecipe } from "../../../store/recipes/useActions";
import { useErrorMessage } from "../../../store/errors/useSelectors";

const ReduxContainer = () => {
  const postNewRecipe = usePostNewRecipe();
  const errorMessage = useErrorMessage();
  return (
    <CreateRecipe postNewRecipe={postNewRecipe} errorMessage={errorMessage} />
  );
};

export default ReduxContainer;
