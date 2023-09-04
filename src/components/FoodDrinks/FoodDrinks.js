import React, { useState } from "react";
import GenreSelector from "./GenreSelector";
import Categories from "./Categories";
import { menu } from "../../constants";

const FoodDrinks = () => {
  const [active, setActive] = useState("food");

  return (
    <section className="">
      <GenreSelector
        active={active}
        setActive={(type) => {
          setActive(type);
        }}
      />
      <div className=" flex max-md:flex-col">
        <Categories menu={active === "food" ? menu[0] : menu[1]} />
        <div className="flex-1"></div>
      </div>
    </section>
  );
};

export default FoodDrinks;
