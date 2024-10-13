import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  SearcName: "",
};

export const SearchFilmSlice = createSlice({
  name: "FilmName",
  initialState,

  reducers: {
    setSearchFilm: (state, action) => {
      state.SearcName = action.payload;
    },
  },
});

export const { setSearchFilm } = SearchFilmSlice.actions;

export default SearchFilmSlice.reducer;
