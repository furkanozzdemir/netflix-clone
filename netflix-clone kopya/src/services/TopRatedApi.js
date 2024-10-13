import React from "react";
import axios from "axios";

import { useEffect, useState } from "react";
import ApiSlice from "../features/ApiSlice";
import { TopRated } from "../features/ApiSlice";
import { useDispatch } from "react-redux";

const TopRatedApi = () => {
  const dispatch = useDispatch();

  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/movie/top_rated",
    params: { language: "en-US", page: "1" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOTFiOGUwNGQ1ZTA5M2EyYTM0ZTY0ZTMwY2U3YmRkYSIsIm5iZiI6MTcyNjU4MTA5OS44NTIzODQsInN1YiI6IjY2NGYzY2UzOTc3MTE0YjE1OWRkNDJhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UcMJv064b7nFZGG3JHYLtxSat-ysO9cQu7xR18xC0yM",
    },
  };
  async function getTopFilms() {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/top_rated",
        options
      );

      dispatch(TopRated(response.data.results));
      console.log(response.data.results);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getTopFilms();
  }, []);
};

export default TopRatedApi;
