import { createSlice } from "@reduxjs/toolkit";

export const favoritesSlice = createSlice({
  name: "faves",
  initialState: {
    ids: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      state.ids.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.ids.splice(state.ids.indexOf(action.payload), 1);
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
