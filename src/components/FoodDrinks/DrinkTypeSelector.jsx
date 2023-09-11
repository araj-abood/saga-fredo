import React, { useState } from "react";
import DrinkTypeCard from "./DrinkTypeCard";

const DrinkTypeSelector = ({ onDrinkTypeSelect, selectedDrinkType }) => {
  return (
    <div className="flex justify-end bg-neutral-900 border-b-[1px] border-white">
      <div className="flex-1 max-lg:hidden flex justify-center items-center">
        <h1 className="text-red-700 text-5xl">Enjoy!!</h1>
      </div>
      <div className="h-[120px] w-1/2 flex justify-between lg:justify-between ">
        <DrinkTypeCard
          title={"Hot Drinks"}
          img="https://images.unsplash.com/photo-1450024529642-858b23834369?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG90JTIwZHJpbmtzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          selected={selectedDrinkType === "warm"}
          onSelect={() => {
            onDrinkTypeSelect("warm");
          }}
        />
        <DrinkTypeCard
          title={"Cold Drinks"}
          img="https://images.unsplash.com/photo-1613616122854-81845b831aff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbGQlMjBkcmlua3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
          selected={selectedDrinkType === "cold"}
          onSelect={() => {
            onDrinkTypeSelect("cold");
          }}
        />
      </div>
    </div>
  );
};

export default DrinkTypeSelector;
