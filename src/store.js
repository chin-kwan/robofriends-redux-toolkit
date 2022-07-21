import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchSlice";
import { robotsApi } from "./apiSlice";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    [robotsApi.reducerPath]: robotsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(robotsApi.middleware)
});
