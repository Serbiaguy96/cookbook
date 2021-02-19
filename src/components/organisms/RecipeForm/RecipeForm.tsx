import React, { useState } from "react";
import { useIntl } from "react-intl";
import { RecipeDTO, UpdateRecipeDTO } from "../../../store/recipeDetail/types";
import { useForm } from "react-hook-form";
import { StyledForm } from "./styles";
import { FormInput } from "../../atoms/inputs";
import Ingredients from "../../molecules/Ingredients";

export type RecipeFormProps = {
  submitAction: (data: RecipeDTO | UpdateRecipeDTO) => void;
  recipeData?: RecipeDTO;
};

export type FormData = Omit<RecipeDTO, "ingredients">;

const RecipeForm = ({ submitAction, recipeData }: RecipeFormProps) => {
  const { control, handleSubmit, errors } = useForm<FormData>();
  const { formatMessage } = useIntl();
  const [ingredients, setIngredients] = useState(recipeData?.ingredients || []);

  const submitHandler = (data: FormData) => {
    const notEmptyIngredients = ingredients.filter((i) => !!i);
    const updatedData = { ...data, ingredients: notEmptyIngredients };

    submitAction(updatedData);
  };

  return (
    <StyledForm onSubmit={handleSubmit(submitHandler)} id="create-recipe-form">
      <FormInput
        name="name"
        label={formatMessage({ id: "recipe.add.name" })}
        control={control}
        defaultValue={recipeData?.name || ""}
        rules={{ pattern: /^(.*?(\b[Aa]ckee\b)[^$]*)$/, required: true }}
        error={errors.name && formatMessage({ id: "error.name" })}
      />
      <FormInput
        name="info"
        label={formatMessage({ id: "recipe.add.intro_text" })}
        control={control}
        defaultValue={recipeData?.info || ""}
        rules={{ required: true }}
        multiline
        error={errors.info && formatMessage({ id: "error.mandatory" })}
      />
      <Ingredients
        ingredients={ingredients}
        updateIngredients={setIngredients}
      />
      <FormInput
        name="description"
        label={formatMessage({ id: "recipe.add.howto" })}
        control={control}
        defaultValue={recipeData?.description || ""}
        multiline
        rules={{ required: true }}
        error={errors.info && formatMessage({ id: "error.mandatory" })}
      />
      <FormInput
        name="duration"
        label={formatMessage({ id: "recipe.add.time" })}
        control={control}
        defaultValue={recipeData?.duration}
        multiline
        type="number"
        rules={{ min: 0 }}
        error={errors.info && formatMessage({ id: "error.time" })}
      />
    </StyledForm>
  );
};

export default RecipeForm;
