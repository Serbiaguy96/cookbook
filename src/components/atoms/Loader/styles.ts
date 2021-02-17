import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

// inspired by https://dev.to/stephencweiss/create-a-spinner-add-a-loader-in-react-4ic2
const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

export const LoaderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledLoader = styled.div<{ size: number; color: string }>`
  border: 0.2em solid transparent;
  border-top: 0.2em solid ${({ color }) => color};
  border-radius: 50%;
  ${({ size }) => `width: ${size}px;
  height: ${size}px;`}
  animation: ${spin} 0.6s linear infinite;
`;
