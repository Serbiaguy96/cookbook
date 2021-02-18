import styled from "@emotion/styled";
import { AccessTime } from "@material-ui/icons";
import { TimeTheme } from "./TimeEntry";
import { LIGHT_THEME } from "./constants";

export const TimeContainer = styled.div<{ timeTheme: TimeTheme }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 12px;
  color: ${({ timeTheme }) =>
    timeTheme === LIGHT_THEME ? "#ffffff" : "#000000"};
`;

export const TimeIcon = styled(AccessTime)`
  font-size: 14px !important;
  margin-right: 5px;
`;
