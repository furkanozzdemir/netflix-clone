import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchFilm } from "../features/SearchSlice";
import axios from "axios";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import SimilarCard from "../components/SimilarCard";
import Footer from "../components/Footer";

function SearchFilm() {
  const searchName = useSelector((state) => state.FilmName.SearcName);
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getSearchData() {
      const options = {
        method: "GET",
        url: "https://api.themoviedb.org/3/search/movie",
        params: {
          query: searchName,
          include_adult: "false",
          language: "en-US",
          page: "1",
        },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOTFiOGUwNGQ1ZTA5M2EyYTM0ZTY0ZTMwY2U3YmRkYSIsIm5iZiI6MTcyODY1OTY3NS4wNTY4NzMsInN1YiI6IjY2NGYzY2UzOTc3MTE0YjE1OWRkNDJhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Y_DPbA7HPhmQzgxRJlVbw_JyuIB_PBTG9xzm7jNblQk",
        },
      };
      const response = await axios.get(
        "https://api.themoviedb.org/3/search/movie",
        options
      );

      setData(response.data.results);
    }

    getSearchData();
  }, []);
  return (
    <div className="w-full min-h-screen flex flex-col   bg-[#0C0C0C]">
      <Navbar />

      <h4 className=" w-full text-white font-semibold pt-10  px-12 text-3xl uppercase">
        {searchName}
      </h4>
      <div className="w-full  px-12 pt-9  pb-6 grid grid-cols-5 gap-5">
        {data.map((movie) => (
          <SimilarCard movie={movie} key={movie.id} />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default SearchFilm;
