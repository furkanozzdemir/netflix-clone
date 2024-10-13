import Home from "./pages/Home";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/swiper-bundle.css";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/bundle";
import MyModal from "./components/MyModal";
import Mylist from "./pages/MyList";
import SearchFilm from "./pages/SearchFilm";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Listem" element={<Mylist />} />
        <Route path="/FilmAra" element={<SearchFilm />} />
      </Routes>
    </Router>
  );
}

export default App;
