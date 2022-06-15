import { useState } from "react";
import styled from "styled-components";
import { FileList } from "../components/file-list";
import { FileUpload } from "../components/file-upload";
import { Page } from "../components/page";
import { useArray } from "../shared/hooks/useArray";
import { createUrl } from "../shared/utils";

const FileControlWrapper = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const PhotoPage = () => {
  const {
    array: photos,
    set: setPhotos,
    push: addPhoto,
    pop: removePhoto,
  } = useArray<File>([]);
  const [activePhoto, setActivePhoto] = useState<string>("");

  const onChange = (files: Array<File>) => {
    setPhotos(files);
  };

  return (
    <Page>
      <FileControlWrapper>
        <FileList files={photos} />
        <FileUpload onChange={onChange} />
      </FileControlWrapper>
    </Page>
  );
};
