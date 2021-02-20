import React from "react";
import {
  ActionsContainer,
  DetailActionsContainer,
  HeaderContainer,
  HeaderFooter,
  HeaderImageContainer,
  NotRatedLabel,
  RecipeName,
  AddIcon,
  ArrowBackIcon,
  DeleteIcon,
  EditIcon,
} from "./styles";
import ScoreStars from "../../../atoms/ScoreStars";
import TimeEntry from "../../../atoms/TimeEntry";
import { LIGHT_THEME } from "../../../atoms/TimeEntry/constants";
import { useHistory } from "react-router-dom";
import { APP_COLORS } from "../../../../global/globalConstants";
import { useIntl } from "react-intl";

export type RecipeHeaderProps = {
  name: string;
  score: number;
  duration: number;
  id: string;
  deleteRecipe: () => void;
};

const RecipeHeader = ({
  name,
  duration,
  score,
  deleteRecipe,
  id,
}: RecipeHeaderProps) => {
  const { push } = useHistory();
  const { formatMessage } = useIntl();

  return (
    <HeaderContainer>
      <HeaderImageContainer>
        <ActionsContainer>
          <ArrowBackIcon onClick={() => push("/")} />
          <DetailActionsContainer>
            <DeleteIcon onClick={deleteRecipe} />
            <EditIcon onClick={() => push(`/update-recipe/${id}`)} />
            <AddIcon onClick={() => push("/new-recipe")} />
          </DetailActionsContainer>
        </ActionsContainer>
        <RecipeName>{name}</RecipeName>
      </HeaderImageContainer>
      <HeaderFooter>
        {score ? (
          <ScoreStars
            score={score}
            starsColor="#ffffff"
            nonActiveStarColor={APP_COLORS.secondaryColor}
            disabled
            starsSize={25}
          />
        ) : (
          <NotRatedLabel>
            {formatMessage({ id: "recipe.not_rated" })}
          </NotRatedLabel>
        )}
        <TimeEntry time={duration} theme={LIGHT_THEME} />
      </HeaderFooter>
    </HeaderContainer>
  );
};

export default RecipeHeader;
