import React from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

const Arrow = ({ direction, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`absolute top-0 ${
        direction === "left" ? "left-0" : "right-0"
      } h-full w-[50px] bg-gradient-to-r ${
        direction === "left"
          ? "from-black/80 to-black/5"
          : "from-black/5 to-black/80"
      }  flex justify-center items-center cursor-pointer`}
    >
      <div className="w-10 h-10 flex items-center justify-center bg-black rounded-full">
        {direction === "left" ? (
          <ArrowLeftIcon className="w-5 h-5" />
        ) : (
          <ArrowRightIcon className="w-5 h-5" />
        )}
      </div>
    </div>
  );
};

export default Arrow;
