import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { GetPopular } from "../features/ApiSlice";
const PopularApi = () => {
  const dispatch = useDispatch();

  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/movie/popular",
    params: { language: "en-US", page: "1" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOTFiOGUwNGQ1ZTA5M2EyYTM0ZTY0ZTMwY2U3YmRkYSIsIm5iZiI6MTcyNjQ5MTYzNS4yNTkwNTcsInN1YiI6IjY2NGYzY2UzOTc3MTE0YjE1OWRkNDJhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Rjc5RUJYmRuptS3zmgE1GnU-FHm9iGcaJBr3ffdeJeo",
    },
  };

  async function GetPopularFilm() {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/popular",
        options
      );

      dispatch(GetPopular(response.data.results));
      console.log(response.data.results);
    } catch (error) {}
  }

  useEffect(() => {
    GetPopularFilm();
  }, []);
};

export default PopularApi;
