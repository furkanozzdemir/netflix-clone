import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  detail: [],
};

export const MovieDetailSlice = createSlice({
  name: "movieDetail",
  initialState,

  reducers: {
    setMovieDetail: (state, action) => {
      state.detail = action.payload;
    },
  },
});

export const { setMovieDetail } = MovieDetailSlice.actions;

export default MovieDetailSlice.reducer;
