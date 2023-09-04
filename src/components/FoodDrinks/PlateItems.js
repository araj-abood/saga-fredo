import React from "react";

const PlateItems = ({ items }) => {
  return (
    <div className="flex flex-col mt-5 gap-2 px-5">
      {items.map((item) => {
        return (
          <div className="flex gap-5 rounded-lg overflow-hidden">
            <div className="w-[100px]">
              <img
                className="h-full w-full object-cover"
                src={item.img}
                alt=""
              />
            </div>
            <div className="flex-col flex-1">
              <h1 className="text-4xl">{item.title}</h1>
              <p className="text-red-400">{item.price} JOD</p>
              <div className="flex justify-end">
                <button className="bg-red-800 py-2 px-4 text-2xl transition-all duration-150 hover:bg-red-500">
                  Add
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PlateItems;
