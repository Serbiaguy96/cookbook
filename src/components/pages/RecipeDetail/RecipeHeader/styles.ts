import styled from "@emotion/styled";

import big_plate from "../../../../assets/images/big_plate.png";
import {Add, ArrowBack, Delete, Edit} from "@material-ui/icons";

export const HeaderContainer = styled.header`
  width: 100%;
`;

export const HeaderImageContainer = styled.div`
  width: calc(100% - 60px);
  height: 270px;
  padding: 15px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url(${big_plate});
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 10;
  
  @media only screen and (min-width: 768px) {
    background-repeat: repeat;
    background-size: contain;
    background-position: center;
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  color: #ffffff;
`;

export const RecipeName = styled.h2`
  color: white;
  text-align: left;
  margin: 0;
  padding: 0;
`;

export const HeaderFooter = styled.div`
  width: calc(100% - 60xp);
  padding: 15px 30px;
  background-color: ${({theme}) => theme.colors.secondaryColor};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const DetailActionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 130px;
`;

export const NotRatedLabel = styled.span`
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  color: #ffffff;
`

export const AddIcon = styled(Add)`
  cursor: pointer;
`;

export const ArrowBackIcon = styled(ArrowBack)`
  cursor: pointer;
`;

export const DeleteIcon = styled(Delete)`
  cursor: pointer;
`;

export const EditIcon = styled(Edit)`
  cursor: pointer;
`;
