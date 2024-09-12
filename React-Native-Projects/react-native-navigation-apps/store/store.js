// create redux store
import { configureStore } from "@reduxjs/toolkit";
import favoritesReducers from "./faveSlice";

export const store = configureStore({
  reducer: { fave: favoritesReducers },
});
