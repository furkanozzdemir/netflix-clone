import React from "react";
import { CiCirclePlus } from "react-icons/ci";
import MyListSlice from "../features/MyListSlice";
import { useDispatch } from "react-redux";
import { addMovieList } from "../features/MyListSlice";
import { MdDone } from "react-icons/md";
import { useState } from "react";
const SimilarCard = ({ movie }) => {
  const [isAdded, setİsAdded] = useState(true);
  const dispatch = useDispatch();

  function addListt(movie) {
    dispatch(addMovieList(movie));
    setİsAdded(false);
  }
  return (
    <div className=" w-[240px] h-[350px] bg-[#2F2F2F] rounded-lg overflow-hidden">
      <div className="w-full h-[160px]">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-full object-center"
        />
      </div>

      <div className="w-full flex gap-2 items-center justify-between px-2 py-2  ">
        <div>{movie.release_date}</div>
        <div
          className="relative group cursor-pointer"
          onClick={() => addListt(movie)}
        >
          {isAdded ? <CiCirclePlus size={45} /> : <MdDone size={45} />}

          <div className="absolute bottom-full -left-1/2 transform -translate-x-1/2 mb-4 hidden group-hover:block bg-white text-black text-lg p-2 rounded-md transition-opacity duration-300 opacity-0 group-hover:opacity-100 z-10 whitespace-nowrap">
            Listeye Ekle
          </div>
        </div>
      </div>

      <div className="w-full px-2 text-[#CFCFCF] text-sm line-clamp-6 ">
        {movie.overview}
      </div>
    </div>
  );
};

export default SimilarCard;
