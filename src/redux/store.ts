import { configureStore } from "@reduxjs/toolkit";
import photosReducer from "./slices/photos-slice";

export const store = configureStore({
  reducer: {
    photos: photosReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
