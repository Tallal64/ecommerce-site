import { configureStore } from "@reduxjs/toolkit";
import featureSlice from "./features/featureSlice";
import themeReducer from "./theme/themeSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    feature: featureSlice,
  },
});
