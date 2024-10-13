import React from "react";

const movies = [
  {
    id: 1,
    title: "Inception",
    description: "A mind-bending thriller.",
    image: "https://via.placeholder.com/300x450",
  },
  {
    id: 2,
    title: "Interstellar",
    description: "A journey through space and time.",
    image: "https://via.placeholder.com/300x450",
  },
  {
    id: 3,
    title: "The Dark Knight",
    description: "A gritty take on Batman.",
    image: "https://via.placeholder.com/300x450",
  },
];

const Slider = () => {
  return (
    <div className="flex overflow-x-auto space-x-4 p-4">
      {movies.map((movie) => (
        <div
          key={movie.id}
          className="relative w-48 h-72 bg-gray-800 rounded-lg overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105"
        >
          {/* Movie Image */}
          <img
            src={movie.image}
            alt={movie.title}
            className="w-full h-full object-cover"
          />
          {/* Hover Info */}
          <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-end p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-white text-lg font-bold">{movie.title}</h3>
            <p className="text-gray-300 text-sm">{movie.description}</p>
            <button className="mt-2 bg-red-600 text-white px-2 py-1 rounded-md">
              Play
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;
