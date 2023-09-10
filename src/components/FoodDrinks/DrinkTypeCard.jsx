import React from "react";

const DrinkTypeCard = ({ selected, img, title, onSelect }) => {
  return (
    <div
      onClick={onSelect}
      className="relative cursor-pointer flex-1 flex justify-center items-center"
    >
      <h1 className="relative z-40 w-fit bg-black/50 text-white py-2 px-4 text-3xl ">
        {title}
      </h1>
      <img
        src={img}
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover z-10"
      />
      <div
        className={`top-0 left-0 absolute h-full w-full bg-black/10 z-10 ${
          !selected && "bg-black/70"
        }`}
      />
    </div>
  );
};

export default DrinkTypeCard;
