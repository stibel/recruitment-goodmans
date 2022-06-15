import { useAppDispatch } from "../../redux/hooks";
import { addPhoto } from "../../redux/slices/photos-slice";

export const FileUpload = () => {
  const dispatch = useAppDispatch();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      dispatch(addPhoto(e.target.files[0]));
    }
  };

  return <input type={"file"} onChange={onChange} />;
};
