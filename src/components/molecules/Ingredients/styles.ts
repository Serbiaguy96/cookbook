import styled from "@emotion/styled";
import { Add, Delete } from "@material-ui/icons";

export const IngredientsContainer = styled.div`
  margin: 20px 0 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const IngredientsTitle = styled.h4`
  font-size: 14px;
  margin: 5px 0;
  color: ${({ theme }) => theme.colors.primaryColor};
  text-transform: uppercase;
`;

export const IngredientContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 10px 0;
`;

export const DeleteIcon = styled(Delete)`
  color: ${({ theme }) => theme.colors.primaryColor};
`;

export const IngredientInput = styled.input`
  width: calc(100% - 30px);
  border: none;
  background-color: white;
  border-bottom: 1px solid ${({ theme }) => theme.colors.thirdColor};
  margin: 5px 0;
  
  &:focus {
    outline: none;
    border-bottom: 2px solid ${({ theme }) => theme.colors.primaryColor};
  }
  
  ::placeholder {
    color: ${({ theme }) => theme.colors.thirdColor};
  }

  :-ms-input-placeholder {
    color: ${({ theme }) => theme.colors.thirdColor};
  }

  ::-ms-input-placeholder {
    color: ${({ theme }) => theme.colors.thirdColor};
  }
  padding-bottom: 5px;
`;

export const AddIngrButton = styled.button`
  padding: 5px;
  color: ${({ theme }) => theme.colors.secondaryColor};
  border: 1px solid ${({ theme }) => theme.colors.secondaryColor};
  border-radius: 7px;
  background-color: white;
  margin: 5px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const AddSpan = styled.span`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 10px;
`;

export const AddIcon = styled(Add)`
  font-size: 12px !important;
  color: ${({ theme }) => theme.colors.secondaryColor};
  margin-right: 3px;
`;
