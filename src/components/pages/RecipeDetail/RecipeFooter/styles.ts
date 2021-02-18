import styled from "@emotion/styled";

export const RecipeFooterContainer = styled.div`
  width: 100%;
  padding: 20px 0;
  background-color: ${({ theme }) => theme.colors.primaryColor};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RecipeFooterSpan = styled.span`
  color: #ffffff;
  font-weight: bold;
  font-size: 14px;
  padding: 5px 0;
`;

export const StarsContainer = styled.div`
  padding: 5px 0;
`;
