import React from "react";
import { TimeContainer, TimeIcon } from "./styles";

export type TimeTheme = "dark" | "light";

export type TimeEntryProps = {
  time: number;
  theme: TimeTheme;
};

const TimeEntry = ({ time, theme }: TimeEntryProps) => {
  return (
    <TimeContainer timeTheme={theme}>
      <TimeIcon />
      <span>{`${time} min.`}</span>
    </TimeContainer>
  );
};

export default TimeEntry;
