import React, { useState } from "react";
import { FaRegCirclePlay } from "react-icons/fa6";
import { CiCirclePlus } from "react-icons/ci";
import { BsHandThumbsUp } from "react-icons/bs";
import { TfiArrowCircleDown } from "react-icons/tfi";
import { IoMdPlayCircle } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { useSelector, useDispatch } from "react-redux";
import { openModal, closeModal } from "../features/Modalslc";
import { setMovieDetail } from "../features/MovieSlice";
import MyModal from "./MyModal";
import { addMovieList } from "../features/MyListSlice";
import MyListSlice from "../features/MyListSlice";
import { MdDone } from "react-icons/md";
const Card = ({ movie, index, firstCard, lastCard }) => {
  const [isDetsilPressed, setİsDetsilPressed] = useState(false);
  const [isClicked, setİsClicked] = useState(false);
  const dispatch = useDispatch();
  const [isListAdded, setİsListAdded] = useState(false);

  function addMovieMyList(movie) {
    dispatch(addMovieList(movie));
    setİsListAdded(true);
  }

  function modalDetail() {
    dispatch(setMovieDetail(movie));
    dispatch(openModal());
  }

  const isFirstCard = index === firstCard;
  const isLastCard = index === lastCard;

  return (
    <div
      className={`relative w-full  z-30 h-[250px] rounded-lg overflow-visible  transform transition-transform duration-300 hover:scale-170 ${
        isFirstCard ? "origin-left" : ""
      } 
      ${isLastCard ? "origin-right" : ""}  hover:rounded-xl hover:z-50`}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="absolute inset-0 w-full h-full object-center rounded-md"
      />

      <div className=" absolute  inset-0 bg-[#1A1A1A] rounded-lg  opacity-0 hover:opacity-100 transition-opacity duration-300 flex    flex-col     gap-1">
        <div className="w-full h-[160px] ">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-full h-full pt-4 "
          />
        </div>

        <div className=" w-full  flex px-2  pt-2 justify-between">
          <div className="flex gap-1">
            <span className="relative group">
              <IoMdPlayCircle size={28} className="cursor-pointer" />
              <div className="absolute bottom-full left-2/3 transform -translate-x-1/2 mb-4 hidden group-hover:block bg-white text-black text-xs p-2 rounded-md transition-opacity duration-300 opacity-0 group-hover:opacity-100 z-10 whitespace-nowrap">
                Oynat
              </div>
            </span>

            <span
              className="relative group cursor-pointer"
              onClick={() => addMovieMyList(movie)}
            >
              {isListAdded ? (
                <MdDone size={28} />
              ) : (
                <CiCirclePlus size={28} className="text-white" />
              )}

              {/* Tooltip */}
              {!isListAdded && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 hidden group-hover:block bg-white text-black text-xs p-2 rounded-md transition-opacity duration-300 opacity-0 group-hover:opacity-100 z-10 whitespace-nowrap">
                  Listeye Ekle
                </div>
              )}
            </span>
            <span className="relative group cursor-pointer">
              <BsHandThumbsUp size={25} className="text-white" />
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 hidden group-hover:block bg-white text-black text-xs p-2 rounded-md transition-opacity duration-300 opacity-0 group-hover:opacity-100 z-10 whitespace-nowrap">
                Bunu sevdim
              </div>
            </span>
          </div>
          <div className="relative group">
            <button onClick={() => modalDetail()}>
              <TfiArrowCircleDown size={25} className="text-white" />
            </button>
            <div className="absolute bottom-full -left-2/3 transform -translate-x-1/2 mb-4 hidden group-hover:block bg-white text-black text-xs p-2 rounded-md transition-opacity duration-300 opacity-0 group-hover:opacity-100 z-10 whitespace-nowrap">
              Daha fazla bilgi
            </div>
          </div>
        </div>

        <div className="w-full flex  items-center justify-start gap-2 pl-3 pb-2">
          <div className="text-[10px]">Psikolojik </div>
          <div className=" flex flex-row items-center justify-center">
            <span>
              <GoDotFill size={6} color="gray" />
            </span>
            <span className="text-[10px] pl-1"> Heyecanlı</span>
          </div>

          <div className="text-xs flex flex-row items-center justify-center">
            <span>
              <GoDotFill size={6} color="gray" />
            </span>

            <span className="text-[10px] pl-1"> Gerilim</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
