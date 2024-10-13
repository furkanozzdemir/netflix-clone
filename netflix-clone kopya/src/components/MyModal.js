import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../features/Modalslc";
import { IoIosCloseCircle } from "react-icons/io";
import button from "../assets/play_icon.png";
import { CiCirclePlus } from "react-icons/ci";
import { BsHandThumbsUp } from "react-icons/bs";
import { motion } from "framer-motion"; // Framer Motion import edildi
import SimilarCard from "./SimilarCard";

const MyModal = ({ layoutId }) => {
  const isOpen = useSelector((state) => state.modal.isOpen);
  const modalFilm = useSelector((state) => state.movieDetail.detail);
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(false);
  const popularData = useSelector((state) => state.Film.popular);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Modal açıkken body kaydırmasını kapat
      setTimeout(() => setIsVisible(true), 10);

      const modalContent = document.querySelector(".modal-content");
      if (modalContent) {
        modalContent.scrollTop = 0; // Scroll pozisyonunu sıfırla
      }
    } else {
      setIsVisible(false);
      document.body.style.overflow = "auto"; // Modal kapandığında body kaydırmasını aç
    }
  }, [isOpen]);

  function clsModal() {
    dispatch(closeModal());
  }

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center"
      initial={{ opacity: 0 }} // Başlangıç opacity
      animate={{ opacity: 1 }} // Açılma animasyonu
      exit={{ opacity: 0 }} // Kapanma animasyonu
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {/* Background Overlay */}
      <div className="fixed inset-0 bg-[rgba(0,0,0,0.7)] transition-opacity duration-300"></div>

      {/* Modal Content */}
      <motion.div
        className="modal-content relative w-[850px] max-h-[90vh] flex flex-col overflow-y-auto no-scrollbar bg-[#1A1A1A] rounded-lg transition-all duration-300"
        layoutId={layoutId} // Karttaki layoutId ile eşleştiriliyor
      >
        <button className="absolute top-4 right-4 z-50" onClick={clsModal}>
          <IoIosCloseCircle size={30} />
        </button>

        <div className="absolute top-[360px] left-[40px] flex items-center gap-2">
          <div className="w-[145px] h-[50px] bg-[#FFFFFF] rounded-md flex items-center justify-center gap-2 text-lg font-semibold text-black z-50">
            <img src={button} alt="title" className="w-[30px]" />
            Oynat
          </div>
          <CiCirclePlus size={48} className="text-white z-50" />
          <BsHandThumbsUp size={39} className="text-white z-50" />
        </div>

        {/* Modal İçeriği */}
        <div className="w-full h-auto flex flex-col items-center justify-center">
          <img
            src={`https://image.tmdb.org/t/p/w500${modalFilm.poster_path}`}
            alt={modalFilm.title}
            className="w-full h-[490px] object-center mb-4"
            style={{
              maskImage:
                "linear-gradient(to bottom, black 30px, transparent 460px )",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 150px, transparent 460px)",
            }}
          />

          <div className="w-full px-10 flex justify-around">
            <div className="w-2/3 flex flex-col gap-5 ">
              <div>
                <div className="w-auto flex gap-2 justify-start items-center pb-2">
                  <p className="text-[#808080]">{modalFilm.release_date}</p>
                  <p>1 sa. 57 dk.</p>
                  <span className="w-8 h-5 border text-xs p-1 flex items-center justify-center text-[#808080]">
                    HD
                  </span>
                </div>
                <div className="w-auto flex gap-2 justify-start items-center">
                  <span className="w-10 h-5 border p-1 flex items-center justify-center">
                    18+
                  </span>
                  <p className="text-sm">cinsellik, argo, madde kullanımı</p>
                </div>
              </div>
              <p className="text-white text-md leading-relaxed">
                {modalFilm.overview}
              </p>
            </div>

            <div className="w-[250px] flex justify-end items-start break-word pl-5">
              <div className="break-words w-45">
                <span className="text-[#808080]">Oyuncu Kadrosu:</span> Tom
                Cruise, Angelina Jolie, Denzel Washington, Ben Affleck
              </div>
            </div>
          </div>

          {/* Benzer İçerikler */}
          <div className="w-full flex flex-col justify-center items-center gap-6 pt-14 pb-2 pl-3">
            <h5 className="w-full font-bold text-2xl pl-5">Benzerleri</h5>
            <div className="w-full grid grid-cols-3 gap-y-5 gap-x-0 pl-5">
              {popularData.map((movie) => (
                <SimilarCard key={movie.id} movie={movie} />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>,
    document.body
  );
};

export default MyModal;
