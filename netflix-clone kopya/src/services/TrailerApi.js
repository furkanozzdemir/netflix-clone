import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import MovieSlice from "../features/MovieSlice";
import { setMovieDetail } from "../features/MovieSlice";
const TrailerApi = ({ id }) => {
  const dispatch = useDispatch();
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/movie/movie_id/videos",
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOTFiOGUwNGQ1ZTA5M2EyYTM0ZTY0ZTMwY2U3YmRkYSIsIm5iZiI6MTcyNzY5OTQ0OS43NDQ4MDMsInN1YiI6IjY2NGYzY2UzOTc3MTE0YjE1OWRkNDJhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ThGGaYIlT2yemrFd7OPRSOPKLi0ZC6ixoupk9mRKmFg",
    },
  };

  async function getTrailer() {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/videos`,
        options
      );
      console.log(response.data.results);
      dispatch(setMovieDetail(response.data.results));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getTrailer();
  }, []);
};

export default TrailerApi;
