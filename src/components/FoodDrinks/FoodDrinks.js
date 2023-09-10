import React, { useState } from "react";
import GenreSelector from "./GenreSelector";
import Categories from "./Categories";
import { menu } from "../../constants";
import { ItemContextProvider } from "../../context/item-context";
import DisplayItem from "../item/DisplayItem";

const FoodDrinks = () => {
  const [active, setActive] = useState("food");

  return (
    <ItemContextProvider>
      <section className="h-screen z-50">
        <GenreSelector
          active={active}
          setActive={(type) => {
            setActive(type);
          }}
        />
        <div className="relative flex max-lg:flex-col">
          <Categories menu={active === "food" ? menu[0] : menu[1]} />
          <div className=" flex-1 bg-white">
            <DisplayItem />
          </div>
        </div>
      </section>
    </ItemContextProvider>
  );
};

export default FoodDrinks;
