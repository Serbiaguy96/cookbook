import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import { APP_COLORS } from "../../../global/globalConstants";

export type ScoreStarsProps = {
  score: number;
  starsColor: string;
  starsSize: number;
  handleStarClick?: (newScore: number) => void;
  disabled?: boolean;
  nonActiveStarColor?: string;
};

const ScoreStars = ({
  score,
  starsColor,
  starsSize,
  handleStarClick,
  disabled,
  nonActiveStarColor,
}: ScoreStarsProps) => {
  const StyledRating = withStyles({
    root: {
      "font-size": `${starsSize}px !important`,
    },
    iconFilled: {
      color: starsColor,
    },
    iconEmpty: {
      color: nonActiveStarColor || APP_COLORS.thirdColor,
      "opacity": "0.5",
    },
  })(Rating);

  const changeStarValue = (newValue: number | null) => {
    if (handleStarClick && newValue) handleStarClick(newValue);
  };

  const roundedScore = Math.round(score * 10) / 10;

  return (
    <StyledRating
      value={roundedScore}
      precision={disabled ? 0.1 : 1}
      onChange={(e, value) => changeStarValue(value)}
      readOnly={disabled}
    />
  );
};

export default ScoreStars;
