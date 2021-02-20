import styled from "@emotion/styled";
import { CheckCircle, Error } from "@material-ui/icons";

export const MessageContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CheckIcon = styled(CheckCircle)`
  font-size: 70px !important;
  color: green;
`;

export const ErrorIcon = styled(Error)`
  font-size: 70px !important;
  color: red;
`;

export const MessageText = styled.div`
  color: ${({ theme }) => theme.colors.primaryColor};
  font-size: 24px;
  width: 250px;
  text-align: center;
  margin: 10px 0;
`;

export const BackButton = styled.button`
  background-color: white;
  color: ${({ theme }) => theme.colors.secondaryColor};
  font-weight: bold;
  padding: 10px;
  font-size: 14px;
  border: 1px solid ${({ theme }) => theme.colors.secondaryColor};
  border-radius: 7px;
  text-transform: uppercase;
  cursor: pointer;
`;
