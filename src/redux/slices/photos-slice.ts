import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface PhotosState {
  photos: Array<File>;
}

const initialState: PhotosState = {
  photos: [],
};

export const photosSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {
    addPhoto: (state, action) => {
      if (state.photos.length === 5) state.photos.pop();
      state.photos.push(action.payload);
    },
  },
});

export const { addPhoto } = photosSlice.actions;
export const selectPhotos = (state: RootState) => state.photos;
export default photosSlice.reducer;