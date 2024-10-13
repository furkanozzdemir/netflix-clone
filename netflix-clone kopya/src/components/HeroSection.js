import React from "react";
import Nlogo from "../assets/N.png";
import herobanner from "../assets/hero_banner.jpg";
import herotitle from "../assets/hero_title.png";
import button from "../assets/play_icon.png";
import info from "../assets/info_icon.png";
const HeroSection = ({ movie }) => {
  return (
    <section className="relative w-full h-screen z-0">
      {/*movie details*/}
      <div className="w-[448px] h-[365px] pl-16 pt-16 ">
        <div className="w-[383px] h-[389px] flex flex-col gap-8">
          <div>
            <img src={herotitle} alt="title" />
          </div>
          <div>
            <p>
              İstanbul'un Kaderi Senin Ellerinde! Kadim bir gizem, efsanevi bir
              güç ve şehri koruma görevi. Hakan, sıradan bir yaşamdan,
              İstanbul'u kötülüklerden koruyacak son Muhafız olmaya doğru uzanan
              destansı bir yolculuğa çıkıyor. Şehir tehlikede, Muhafız göreve
              hazır! Sen de bu heyecan dolu hikayeye katılmaya hazır mısın?
            </p>
          </div>

          <div className="flex gap-4  ">
            <div className="w-[145px] h-[50px] bg-[#FFFFFF] rounded-md flex items-center justify-center gap-2 text-lg font-semibold text-black">
              <img src={button} alt="title" className="w-[30px] " />
              Oynat
            </div>

            <div className="w-[240px] h-[50px] flex gap-2 items-center justify-center text-lg font-bold bg-gray-700 rounded-md bg-opacity-50	">
              <img src={info} alt="title" className="w-[45px] " />
              Daha Fazla Bilgi
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
