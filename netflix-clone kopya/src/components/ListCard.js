import React from "react";
import { CiCircleRemove } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { removeMovieList } from "../features/MyListSlice";

const ListCard = ({ movie }) => {
  const dispatch = useDispatch();

  function removeMovies(movie) {
    dispatch(removeMovieList(movie.id));
  }
  return (
    <div className=" w-full h-[350px] bg-[#1A1A1A] rounded-lg overflow-hidden  flex flex-col gap-1">
      <div className="w-full h-[160px]">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-full object-center"
        />
      </div>

      <div className="w-full flex gap-2 items-center justify-between px-6 py-2  ">
        <div>{movie.release_date}</div>
        <span
          className="cursor-pointer relative group"
          onClick={() => removeMovies(movie)}
        >
          <CiCircleRemove size={35} />
          <div className="absolute bottom-full -left-1/2 transform -translate-x-1/2 mb-4 hidden group-hover:block bg-white text-black text-base p-2 rounded-md transition-opacity duration-300 opacity-0 group-hover:opacity-100 z-10 whitespace-nowrap">
            Listeden kaldır
          </div>
        </span>
      </div>

      <div className="w-full px-6 text-[#CFCFCF] text-sm line-clamp-6 ">
        {movie.overview}
      </div>
    </div>
  );
};

export default ListCard;
