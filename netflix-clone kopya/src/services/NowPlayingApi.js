import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import ApiSlice from "../features/ApiSlice";
import { nowPlayingFilm } from "../features/ApiSlice";
const NowPlayingApi = () => {
  const [nowPlay, setNowPlay] = useState([]);

  const dispatch = useDispatch();
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOTFiOGUwNGQ1ZTA5M2EyYTM0ZTY0ZTMwY2U3YmRkYSIsIm5iZiI6MTcyNTM3MjIxMC45MjU1NDUsInN1YiI6IjY2NGYzY2UzOTc3MTE0YjE1OWRkNDJhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dYxcl1-HDLuTocDjpJLReoRXl-Ptiwa_A73bLx-_ljA",
    },
  };

  async function nowPlaying() {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=2",
        options
      );
      dispatch(nowPlayingFilm(response.data.results));

      console.log(response.data.results);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    nowPlaying();
  }, []);
};

export default NowPlayingApi;
