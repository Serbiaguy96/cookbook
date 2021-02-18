import React from "react";
import {
  ActionsContainer,
  HeaderContainer,
  HeaderFooter,
  HeaderImageContainer,
  RecipeName,
} from "./styles";
import { Add, ArrowBack } from "@material-ui/icons";
import ScoreStars from "../../../atoms/ScoreStars";
import TimeEntry from "../../../atoms/TimeEntry";
import { LIGHT_THEME } from "../../../atoms/TimeEntry/constants";
import { useHistory } from "react-router-dom";
import { APP_COLORS } from "../../../../global/globalConstants";

export type RecipeHeaderProps = {
  name: string;
  score: number;
  duration: number;
  id: string;
};

const RecipeHeader = ({ name, duration, score }: RecipeHeaderProps) => {
  const { push } = useHistory();
  return (
    <HeaderContainer>
      <HeaderImageContainer>
        <ActionsContainer>
          <ArrowBack onClick={() => push("/")} />
          <Add onClick={() => push("/new-recipe")} />
        </ActionsContainer>
        <RecipeName>{name}</RecipeName>
      </HeaderImageContainer>
      <HeaderFooter>
        <ScoreStars
          score={score}
          starsColor="#ffffff"
          nonActiveStarColor={APP_COLORS.secondaryColor}
          disabled
          starsSize={25}
        />
        <TimeEntry time={duration} theme={LIGHT_THEME} />
      </HeaderFooter>
    </HeaderContainer>
  );
};

export default RecipeHeader;
