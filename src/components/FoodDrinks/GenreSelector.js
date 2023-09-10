import React from "react";

const GenreSelector = ({ active, setActive }) => {
  return (
    <div className="flex ">
      <button
        onClick={() => {
          setActive("food");
        }}
        className={`flex-1  z-20 first-letter: block py-1 lg:py-3 text-4xl lg:text-5xl text-center  ${
          active === "food" ? "bg-neutral-200 text-red-500" : "bg-neutral-700"
        }`}
      >
        Food
      </button>
      <button
        onClick={() => {
          setActive("drink");
        }}
        className={`flex-1 py-1   z-20  block lg:py-3 text-4xl lg:text-5xl text-center  ${
          active === "drink" ? "text-red-500 bg-neutral-200" : "bg-neutral-700"
        } `}
      >
        Drinks
      </button>
    </div>
  );
};

export default GenreSelector;
