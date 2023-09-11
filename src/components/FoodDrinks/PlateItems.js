import React, { useContext, useEffect, useRef, useState } from "react";
import { ItemContext } from "../../context/item-context";
import { CartContext } from "../../context/cart-context";

const PlateItems = ({ items }) => {
  const divRef = useRef();
  const itemContext = useContext(ItemContext);
  const cartContext = useContext(CartContext);

  useEffect(() => {
    divRef.current.scrollTo({ top: 0 });
  });

  return (
    <div ref={divRef} className={`h-[400px] pb-14 top-0 overflow-y-scroll `}>
      <div className="flex flex-col mt-5 gap-4 px-5  ">
        {items.map((item, index) => {
          return (
            <div
              key={`${item.title} ${index}`}
              className="flex gap-3 rounded-lg overflow-hidden"
            >
              <div className="w-[140px] h-[140px]">
                <img
                  className="h-full w-full object-cover cursor-pointer"
                  onClick={() => {
                    itemContext.selectItemHandler(item);
                  }}
                  src={item.img}
                  alt=""
                />
              </div>
              <div className=" flex flex-1">
                <div className="flex flex-col flex-1">
                  <h1
                    onClick={() => {
                      itemContext.selectItemHandler(item);
                    }}
                    className="text-[29px] text-red-200 font-semibold transition-all duration-150 hover:text-red-500 cursor-pointer"
                  >
                    {item.title}
                  </h1>
                  <p className="text-[19px] text-neutral-300 flex-1 pl-1">
                    {item.descrip}
                  </p>

                  <div className="flex justify-end py-1 pr-3">
                    <p className="text-red-400  text-2xl">{item.price} JOD</p>
                  </div>
                </div>
                <div className="flex  items-end">
                  {/* THE ADD FOR THE PLATE ITEMS */}
                  {/* <button
                    onClick={() => {
                      cartContext.addItemHandler(null, 1);
                    }}
                    className="bg-red-800 py-2 px-4 text-2xl transition-all duration-150 hover:bg-red-500"
                  >
                    Add
                  </button> */}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PlateItems;
