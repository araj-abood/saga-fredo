import React from "react";
import { motion } from "framer-motion";

const CategoryItem = ({ title, img, selected, onClick }) => {
  return (
    <div onClick={onClick} className={`cursor-pointer relative`}>
      <div
        className={`w-[180px] rounded-md h-[110px] relative border-[2px] border-transparent ${
          selected && "border-red-600"
        }`}
      >
        <img
          className={`absolute w-full h-full object-cover transition-all duration-200  ${
            selected && "scale-[1.1]"
          } `}
          src={img}
          alt=""
        />
      </div>
      <p
        className={`text-center uppercase transition-all duration-200 text-[23px] ${
          selected && "text-red-600 mt-5"
        } `}
      >
        {title}
      </p>

      {selected && (
        <motion.div
          className=" absolute h-1 w-full -bottom-1 left-0 bg-red-600"
          layoutId="underline"
        ></motion.div>
      )}
    </div>
  );
};

export default CategoryItem;
