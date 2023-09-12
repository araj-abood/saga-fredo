import React, { useState } from "react";
import GenreSelector from "./GenreSelector";
import Categories from "./Categories";
import { menu } from "../../constants";
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
    <section className=" flex-1 min-h-0  z-50">
      <div className="flex  bg-red-400 h-full  flex-col">
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

        <div className="relative min-h-0  flex-1 flex max-lg:flex-col">
          <Categories menu={display} />
          <div className=" xl:flex-1  bg-white">
            <DisplayItem />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodDrinks;
