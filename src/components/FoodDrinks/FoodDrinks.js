import React, { useState } from "react";
import GenreSelector from "./GenreSelector";
import Categories from "./Categories";
import { menu } from "../../constants";
import { ItemContextProvider } from "../../context/item-context";
import DisplayItem from "../item/DisplayItem";
import DrinkTypeSelector from "./DrinkTypeSelector";

const FoodDrinks = () => {
  const [active, setActive] = useState("food");
  const [drinkType, setDrinkType] = useState("warm");

  console.log(drinkType);

  const display =
    active === "food"
      ? menu[0]
      : drinkType === "cold"
      ? menu[1].types[0]
      : menu[1].types[1];

  return (
    <ItemContextProvider>
      <section className="h-screen z-50">
        <GenreSelector
          active={active}
          setActive={(type) => {
            setActive(type);
          }}
        />

        {active === "drink" && (
          <DrinkTypeSelector
            onDrinkTypeSelect={(type) => {
              setDrinkType(type);
            }}
            selectedDrinkType={drinkType}
          />
        )}

        <div className="relative flex  max-lg:flex-col">
          <Categories menu={display} />
          <div className=" flex-1 bg-white">
            <DisplayItem />
          </div>
        </div>
      </section>
    </ItemContextProvider>
  );
};

export default FoodDrinks;
