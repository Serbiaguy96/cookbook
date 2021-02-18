import styled from "@emotion/styled";
import { Add, ArrowBack } from "@material-ui/icons";

export const HeaderContainer = styled.header`
  position: sticky;
  left: 0;
  right: 0;
  top: 0;
  width: calc(100vw - 60px);
  margin-left: calc(-50vw + 50%);
  padding: 15px 30px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.thirdColor};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: white;
`;

export const HeaderText = styled.h2`
  margin: 0;
  padding: 0;
  color: black;
  text-transform: capitalize;
`;

export const AddIcon = styled(Add)`
  color: ${({ theme }) => theme.colors.primaryColor};
  cursor: pointer;
`;

export const ArrowIcon = styled(ArrowBack)`
  color: ${({ theme }) => theme.colors.primaryColor};
  cursor: pointer;
`;
