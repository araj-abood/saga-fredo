import React, { useState } from "react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid";

const DynamicAdder = ({ count, setCount }) => {
  const addButtonhandler = () => {
    setCount((prev) => prev + 1);
  };

  const removeButtonHandler = () => {
    setCount((prev) => {
      if (prev > 1) {
        return prev - 1;
      }
      return prev;
    });
  };

  return (
    <div className="flex">
      <button
        onClick={removeButtonHandler}
        className="flex justify-center px-1 bg-red-600"
      >
        <MinusIcon className="w-10 h-10" />
      </button>
      <input
        className="text-black text-center text-xl"
        value={count}
        type="number"
      />
      <button
        className="flex justify-center px-1 bg-red-600"
        onClick={addButtonhandler}
      >
        <PlusIcon className="w-10 h-10" />
      </button>
    </div>
  );
};

export default DynamicAdder;
