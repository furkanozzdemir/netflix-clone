import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";

import Card from "./Card";
import "swiper/css/bundle";
import "swiper/swiper-bundle.css";

const MovieSlider = ({ movies, title }) => {
  const [previousIndex, setPreviousIndex] = useState(0); // Önceki slide'ın indeksini tutmak için
  const [firstCard, setFirstCard] = useState(0);

  const [lastCard, setLastCard] = useState(6);

  // Swiper kaydırma başladığında tetiklenen fonksiyon
  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;

    // Kaydırma yönünü bulmak için önceki ve şimdiki index'i karşılaştırıyoruz
    if (currentIndex > previousIndex) {
      setFirstCard(firstCard + 1);
      setLastCard(lastCard + 1);
    } else if (currentIndex < previousIndex) {
      setFirstCard(firstCard - 1);
      setLastCard(lastCard - 1);
    }

    // Yeni aktif index'i güncelle
    setPreviousIndex(currentIndex);
  };
  return (
    <div className="w-full px-16 h-[350px] bg-transparent pl-16 pt-2 relative z-20 ">
      <Swiper
        style={{
          height: "350px",
          paddingTop: "15px",
          display: "flex",
          flexDirection: "column-reverse",
        }}
        modules={[Navigation]} // Navigation modülünü kullanmak için ekliyoruz
        spaceBetween={10} // Slider öğeleri arasındaki boşluk
        slidesPerView={7} // Görüntülenecek slide sayısı
        navigation // Sağ-sol yön okları için
        speed={500} // Geçiş hızı
        allowTouchMove={false}
        onSlideChange={handleSlideChange}
      >
        <div className="pb-3">
          <h1 className="text-xl font-bold">{title}</h1>
        </div>
        {movies.map((movie, index) => (
          <SwiperSlide key={movie.id} className="">
            <Card
              movie={movie}
              index={index}
              firstCard={firstCard}
              lastCard={lastCard}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovieSlider;
