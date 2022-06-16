import { ImCross } from "react-icons/im";
import styled from "styled-components";

const StyledList = styled.ul`
  width: 20%;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  text-align: left;
`;

const StyledListItem = styled.li<{ active: boolean }>`
  width: 100%;
  padding: 5px;
  margin: 1px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => (props.active ? "#c15e68" : "#cfd2a5")};
  color: ${(props) => (props.active ? "#cfd2a5" : "#c15e68")};
  border: 1px solid ${(props) => (props.active ? "#cfd2a5" : "#c15e68")};
  border-radius: 5px;
  cursor: pointer;
`;

interface FileListProps {
  files: Array<File>;
  activeIndex: number;
  onSelect: (index: number) => void;
  onDelete: (index: number) => void;
}

export const FileList = ({
  files,
  activeIndex,
  onSelect,
  onDelete,
}: FileListProps) => {
  return (
    <StyledList>
      {files.map((file, index) => (
        <StyledListItem active={index === activeIndex} key={index}>
          <span style={{ width: "90%" }} onClick={() => onSelect(index)}>
            {index + 1}. {file.name}
          </span>
          <ImCross
            style={{ width: "10%" }}
            role={"button"}
            onClick={() => onDelete(index)}
          />
        </StyledListItem>
      ))}
    </StyledList>
  );
};
