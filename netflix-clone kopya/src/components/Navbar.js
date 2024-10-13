import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/logo.png";
import { BiBell } from "react-icons/bi";
import { IoSearchOutline } from "react-icons/io5";
import { MdArrowDropDown } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import SearchFilm from "../pages/SearchFilm";
import { useDispatch } from "react-redux";
import { setSearchFilm } from "../features/SearchSlice";
import profil from "../assets/profile_img.png";
function Navbar() {
  const [isOpen, setİsOpen] = useState(false);
  const [isSearchOpen, setİsSearchOpen] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [inputText, setİnputText] = useState("");
  const divRef = useRef(null);
  const dispatch = useDispatch();

  function HandleİnputChange(e) {
    const newValue = e.target.value;
    setİnputText(newValue);
    dispatch(setSearchFilm(newValue));
  }

  const navigate = useNavigate();
  function handleClick() {
    navigate(`/FilmAra`);
  }

  function isSearchClicked() {
    setİsSearchOpen(false);
  }

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (divRef.current && !divRef.current.contains(e.target)) {
        setİsSearchOpen(true); // Input dışı tıklanırsa input'u kapat
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    const handleScroll = () => {
      // Scroll miktarına göre arka plan rengini değiştireceğiz
      setIsScrolled(window.scrollY > 50); // 50px'den fazla kaydırıldığında siyah yap
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <nav
      className={`w-full h-[70px] px-10  sticky top-0  z-50 transition-all duration-300 flex flex-row  justify-between items-center ${
        isScrolled ? " bg-[#0C0C0C]" : "bg-transparent"
      }`}
    >
      {/*logo       */}
      <div className=" flex items-center gap-9">
        <img className="w-[120px] h-[50px]" src={logo} alt="logo"></img>

        <div className="hidden  md:flex">
          {/*links       */}
          <ul className="flex flex-row gap-5 ">
            <li className="text-sm text-s text-white font-bold ">
              <Link to="/"> Ana Sayfa</Link>
            </li>
            <li className="text-sm text-[#E5E5E5] cursor-pointer ">Diziler</li>
            <li className="text-sm text-[#E5E5E5] cursor-pointer ">Filmler</li>
            <li className="text-sm text-[#E5E5E5] cursor-pointer ">
              Yeni ve Popüler
            </li>
            <li className="text-sm text-[#E5E5E5] cursor-pointer ">
              <Link to="/Listem">Listem</Link>
            </li>
          </ul>
        </div>
      </div>

      {/*searchbar       */}

      <div className="  hidden md:flex  items-center gap-6 ">
        <div className="flex justify-center items-center gap-2">
          {isSearchOpen ? (
            <span onClick={isSearchClicked} className="cursor-pointer">
              <IoSearchOutline size={24} />
            </span>
          ) : (
            <div
              className="flex items-center justify-center gap-2"
              ref={divRef}
            >
              <span onClick={handleClick}>
                <IoSearchOutline size={26} />
              </span>

              <input
                className="rounded-md text-center text-black "
                placeholder="search a film"
                type="text"
                value={inputText}
                onChange={HandleİnputChange}
              />
            </div>
          )}
        </div>
        <div>Çocuk </div>

        <div>
          <BiBell size={24} />
        </div>

        <div className="flex items-center gap-1 relative group">
          <div className="rounded-md overflow-hidden">
            <img src={profil} className="w-8" />
          </div>
          <MdArrowDropDown size={24} />
        </div>
      </div>

      <div className="block xs:block md:hidden">
        <RxHamburgerMenu size={24} />
      </div>
    </nav>
  );
}

export default Navbar;
