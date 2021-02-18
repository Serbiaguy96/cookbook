import styled from "@emotion/styled";

export const ContentContainer = styled.div`
  width: calc(100% - 60px);
  margin: 20px 30px;
  display: flex; 
  flex-direction: column;
`;


export const InfoParagraph = styled.p`
  margin-top: 5px;
  font-size: 15px;
  color: #554D44;
`;

export const ContentTitle = styled.h3`
  color: ${({theme}) => theme.colors.primaryColor};
  margin-bottom: 10px;
`;

export const IngredientsList = styled.ul`
  margin: 0;
  font-size: 14px;
  padding-left: 30px;
  color: #554D44;
`;
