import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movieList: [],
};

export const MyMovieList = createSlice({
  name: "mylist",
  initialState,
  reducers: {
    addMovieList: (state, action) => {
      state.movieList.push(action.payload);
      console.log(state.movieList.length);
    },
    removeMovieList: (state, action) => {
      state.movieList = state.movieList.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addMovieList, removeMovieList } = MyMovieList.actions;

export default MyMovieList.reducer;
