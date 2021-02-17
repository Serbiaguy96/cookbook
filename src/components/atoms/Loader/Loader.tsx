import React from "react";
import { LoaderContainer, StyledLoader } from "./styles";
import { APP_COLORS } from "../../../global/globalConstants";

export type LoaderProps = {
  size?: number;
};

const Loader = ({ size = 24 }: LoaderProps) => {
  return (
    <LoaderContainer>
      <StyledLoader size={size} color={APP_COLORS.primaryColor} />
    </LoaderContainer>
  );
};

export default Loader;
