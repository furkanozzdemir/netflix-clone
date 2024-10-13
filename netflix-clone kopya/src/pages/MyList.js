import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import ListCard from "../components/ListCard";
import { useEffect } from "react";
import Footer from "../components/Footer";
function MyList() {
  const list = useSelector((state) => state.MyList.movieList);
  const [isEmpty, setİsEmpty] = useState(false);

  useEffect(() => {
    if (list.length != 0) {
      setİsEmpty(true);
    } else {
      setİsEmpty(false);
    }
  }, []);

  return (
    <div className={`w-full min-h-screen bg-[#0C0C0C] `}>
      <Navbar />
      <h4 className="font-normal text-3xl pl-14 py-6">Listem</h4>
      <div className="w-full min-h-screen grid grid-cols-4 gap-14 px-16 py-5">
        {/* Tüm ListCard'ları buraya aldık */}
        {list.map((movie) => (
          <ListCard key={movie.id} movie={movie} />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default MyList;
