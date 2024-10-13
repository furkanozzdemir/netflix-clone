import { configureStore } from "@reduxjs/toolkit";
import ApiSlice from "./ApiSlice";
import modalReducer from "./Modalslc";
import MyList from "./MyListSlice";
import MovieSlice from "./MovieSlice";
import SearchSlice from "./SearchSlice";
export const store = configureStore({
  reducer: {
    Film: ApiSlice,
    modal: modalReducer,
    movieDetail: MovieSlice,
    MyList: MyList,
    FilmName: SearchSlice,
  },

  devTools: process.env.NODE_ENV !== "production",
});
