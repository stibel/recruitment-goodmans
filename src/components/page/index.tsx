import { ReactNode } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  padding: 0;
  margin: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface PageProps {
  children: ReactNode | Array<ReactNode>;
}

export const Page = ({ children }: PageProps) => {
  return (
    <StyledDiv>
        {children}
    </StyledDiv>
  );
};
