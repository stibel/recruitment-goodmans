import { ReactNode } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  padding: 0;
  margin: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  background-color: #c15e68;
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
