export const FileUpload = () => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      console.log(e.target.files[0]);
    }
  };

  return <input type={"file"} onChange={onChange} />;
};
