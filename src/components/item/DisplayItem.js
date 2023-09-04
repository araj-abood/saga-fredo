import React, { useContext } from "react";
import { ItemContext } from "../../context/item-context";
import { XCircleIcon } from "@heroicons/react/24/solid";

const DisplayItem = () => {
  const { item, deSelectItemHandler } = useContext(ItemContext);

  if (!item) {
    return (
      <h1 className="text-4xl text-center mt-5">
        Select an item to view Details
      </h1>
    );
  }

  console.log(item);

  return (
    <div className="h-full bg-neutral-600">
      <div className="h-[500px] ml-2 relative">
        <img className="h-full  w-full object-cover" src={item.img} alt="" />
        <div className="absolute min-h-[200px] flex flex-col z-20 bottom-0 text-white left-0 w-full bg-black/50 border-t border-white px-4 py-2">
          <div className="flex justify-between">
            <h1 className=" text-4xl text-red-500">{item.title}</h1>
            <p className="text-3xl ">{item.price} JOD</p>
          </div>
          <p>{item.descrip}</p>
          <div className=" flex flex-1 items-end">
            <button className="bg-red-600/80 transition-all hover:bg-red-600/100 text-2xl py-2 px-4 flex-1 ">
              Add
            </button>
          </div>
        </div>
        <div
          onClick={deSelectItemHandler}
          className="absolute top-10 right-10 w-12 h-12 rounded-full bg-black/50 flex justify-center items-center  cursor-pointer"
        >
          <XCircleIcon className="  w-10 h-10 text-red-600 " />
        </div>
      </div>
    </div>
  );
};

export default DisplayItem;
