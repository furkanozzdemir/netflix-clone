import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import NowPlayingApi from "../services/NowPlayingApi";
import PopularApi from "../services/PopularApi";
import TopRatedApi from "../services/TopRatedApi";
import { useSelector } from "react-redux";
import Card from "../components/Card";
import HeroSection from "../components/HeroSection";
import herobanner from "../assets/hero_banner.jpg";
import Footer from "../components/Footer";
import MyModal from "../components/MyModal"; // Modal bileşenini ekledik
import MovieSlider from "../components/MovieSlider";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import SearchFilm from "./SearchFilm";
function Home() {
  const nowPlaying = useSelector((state) => state.Film.nowPlaying);

  const popularData = useSelector((state) => state.Film.popular);
  const top = useSelector((state) => state.Film.topRated);
  const [hero, setHero] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false); // Modal state

  useEffect(() => {
    if (nowPlaying.length > 4) {
      setHero(nowPlaying[4]);
    }
  }, [nowPlaying]);

  return (
    <div className="relative w-full min-h-screen bg-[#0C0C0C] ">
      <img
        src={herobanner}
        alt="foto"
        className="w-full object-cover absolute"
        style={{
          maskImage:
            "linear-gradient(to bottom, black 30px, transparent 800px )",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 550px, transparent 800px)",
        }}
      />

      <NowPlayingApi />
      <PopularApi />
      <TopRatedApi />
      <Navbar />

      {hero ? <HeroSection movie={hero} /> : <h1>Yükleniyor...</h1>}

      <div className=" bg-[#0C0C0C] z-20">
        <MovieSlider movies={nowPlaying} title="furkan ,izlemeye devam et " />
        <MovieSlider movies={popularData} title="Popüler Filmler" />
        <MovieSlider movies={top} title="En çok oy alanlar " />
      </div>

      {/* Modal'ı burada çağırıyoruz */}
      {isModalOpen && <MyModal closeModal={() => setModalOpen(false)} />}

      {/* Footer */}
      <Footer />
      <MyModal />
    </div>
  );
}

export default Home;
