import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nowPlaying: [],
  popular: [],
  topRated: [],
};

export const filmSlice = createSlice({
  name: "Film",
  initialState,

  reducers: {
    nowPlayingFilm: (state, action) => {
      state.nowPlaying = action.payload;
    },

    GetPopular: (state, action) => {
      state.popular = action.payload;
    },

    TopRated: (state, action) => {
      state.topRated = action.payload;
    },
  },
});

export const { nowPlayingFilm, GetPopular, TopRated } = filmSlice.actions;

export default filmSlice.reducer;
