import { configureStore } from "@reduxjs/toolkit";
import contentReducer from "./slice/ContentSlice";

export const Store = configureStore({
  reducer: {
    content: contentReducer,
  },
});