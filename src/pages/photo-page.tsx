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
  background-color: #cfd2a5;
  color: #c15e68;
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
    remove: removePhoto,
  } = useArray<File>([]);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [activePhoto, setActivePhoto] = useState<string>("");

  useEffect(() => {
    if (!photos.length) {
      setActivePhoto("");
      return;
    }
    if (activeIndex >= photos.length - 1) setActiveIndex(photos.length - 1);
    setActivePhoto(createUrl(photos[activeIndex]));
  }, [photos, activeIndex]);

  const onChange = (files: Array<File>) => {
    if (photos.length + files.length <= 5) {
      setPhotos(photos.concat(files));
      return;
    }
    setPhotos(files);
    setActiveIndex(0);
  };

  const onSelected = (index: number) => {
    setActiveIndex(index);
  };

  const onDelete = (index: number) => {
    if (index === activeIndex && activeIndex === photos.length - 1) {
      setActiveIndex(activeIndex - 1);
    }
    removePhoto(photos[index]);
  };

  return (
    <Page>
      <ImageWrapper>
        {activePhoto ? (
          <StyledImg src={activePhoto} alt={"Active photo"} />
        ) : (
          <em>No photos</em>
        )}
      </ImageWrapper>
      <FileControlWrapper>
        <FileList
          files={photos}
          activeIndex={activeIndex}
          onSelect={onSelected}
          onDelete={onDelete}
        />
        <FileUpload onChange={onChange} />
      </FileControlWrapper>
    </Page>
  );
};
