import styled from "@emotion/styled";

export const MainContentContainer = styled.div<{ hideOverflow?: boolean }>`
  overflow-y: ${({ hideOverflow }) => (hideOverflow ? "hidden" : "auto")};
  height: 100vh;
  margin: 0;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: white;
  overflow-x: hidden;
`;
