import { useEffect, useState } from "react";
import styled from "styled-components";
import { FileList } from "../components/file-list";
import { FileUpload } from "../components/file-upload";
import { Page } from "../components/page";
import { useArray } from "../shared/hooks/useArray";
import { createUrl } from "../shared/utils";

const ImageWrapper = styled.div`
  /* position: relative; */
  width: 100%;
  height: 75%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0ffff;
`;

const StyledImg = styled.img`
  object-fit: contain;
  height: 100%;
`;

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

  useEffect(() => {
    if (!photos.length) {
      setActivePhoto("");
      return;
    }
    setActivePhoto(createUrl(photos[0]));
  }, [photos]);

  const onChange = (files: Array<File>) => {
    setPhotos(files);
  };

  return (
    <Page>
      <ImageWrapper>
        <StyledImg src={activePhoto} alt={"active photo"} />
      </ImageWrapper>
      <FileControlWrapper>
        <FileList files={photos} />
        <FileUpload onChange={onChange} />
      </FileControlWrapper>
    </Page>
  );
};
