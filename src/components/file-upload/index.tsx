import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 40%;
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 3px dotted #cfd2a5;
  border-radius: 25px;
  background-color: #c15e68;
  color: #cfd2a5;
`;

interface FileUploadProps {
  onChange: (files: Array<File>) => void;
}

export const FileUpload = ({ onChange }: FileUploadProps) => {
  const onDrop = useCallback(
    (acceptedFiles: Array<File>) => onChange(acceptedFiles),
    [onChange]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxFiles: 5,
    accept: {
      "image/png": [".png", ".jpg", ".jpeg"],
    },
  });

  return (
    <Wrapper {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <div>
          <p>
            Drag and drop some files here; keep in mind only five files can be
            accepted at once
          </p>
          <em>Accepting only *.png, *.jpg and *.jpeg files</em>
        </div>
      )}
    </Wrapper>
  );
};
