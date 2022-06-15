import { useEffect } from "react";
import styled from "styled-components";

const StyledList = styled.ol`
  width: 20%;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  /* align-items: center; */
  text-align: left;
`;

interface FileListProps {
  files: Array<File>;
}

export const FileList = ({ files }: FileListProps) => {
  useEffect(() => console.log(files), [files]);

  return (
    <StyledList>
      {files.map((file, index) => (
        <li key={index}>{file.name}</li>
      ))}
    </StyledList>
  );
};
