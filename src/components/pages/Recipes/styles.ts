import styled from "@emotion/styled";

export const RecipesListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const RecipeItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px 5px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.thirdColor};
  width: 100%;

  &:last-child {
    border-bottom: none;
  }
`;

export const RecipeSmallImage = styled.img`
  width: 100px;
  height: 100px;
`;

export const RecipeContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: calc(100% - 20px);
  justify-content: space-between;
  margin: 0 10px;
`;

export const RecipeContentHeader = styled.h3`
  font-size: 16px;
  margin: 0;
  color: ${({ theme }) => theme.colors.primaryColor};
`;
