import React, { useContext, useState } from "react";

import { ArrowLeftIcon, XCircleIcon } from "@heroicons/react/24/solid";
import { AnimatePresence, motion } from "framer-motion";
import DynamicAdder from "../UI/DynamicAdder";
import { CartContext, CartProvider } from "../../context/cart-context";

const DisplayItemContent = ({ item, onExit }) => {
  const [count, setCount] = useState(1);

  const cartContext = useContext(CartContext);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className=" max-xl:absolute  top-0 left-0 z-20 h-full  w-full bg-neutral-600"
      >
        <div className="min-h-[500px] h-full ml-0 relative overflow-hidden">
          <img className="h-full  w-full object-cover" src={item.img} alt="" />
          <div
            className="absolute h-1/2
           min-h-[200px] flex flex-col z-20 bottom-0 text-white left-0 w-full bg-black/50 border-t border-white px-4 py-2"
          >
            <div className="flex justify-between max-md:flex-col">
              <h1 className="  text-3xl xl:text-4xl text-red-500">
                {item.title}
              </h1>
              <p className=" text-2xl xl:text-3xl self-end ">
                {item.price} JOD
              </p>
            </div>
            <p>{item.descrip}</p>
            {/* <div className=" flex flex-col gap-5 justify-center flex-1 ">
              <div className="flex justify-end">
                <DynamicAdder count={count} setCount={setCount} />
              </div>
              <button
                onClick={() => {
                  cartContext.addItemHandler(null, count);
                }}
                className="bg-red-600/80 transition-all hover:bg-red-600/100 text-2xl py-2 px-4 flex-1 "
              >
                Add
              </button>
            </div> */}
          </div>
          {/* <div
            onClick={onExit}
            className="absolute top-10 right-10 w-12 h-12 rounded-full bg-black/50 flex justify-center items-center  cursor-pointer"
          >
            <XCircleIcon className="  w-10 h-10 text-red-600 " />
          </div> */}
          <div
            onClick={onExit}
            className="absolute top-0 left-0  w-14 h-14  bg-black/50 rounded-br-md flex justify-center items-center  cursor-pointer"
          >
            <ArrowLeftIcon className="w-12 h-12 text-red-600 " />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default DisplayItemContent;
