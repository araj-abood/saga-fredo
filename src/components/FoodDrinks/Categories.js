import React, { useEffect, useState } from "react";
import CategoryItem from "./CategoryItem";
import Arrow from "../UI/Arrow";
import PlateItems from "./PlateItems";

import CategorySwiper from "./CategorySwiper";

const Categories = ({ menu }) => {
  const { categories } = menu;
  const [selected, setSelected] = useState(0);

  const [isScrollingDown, setIsScrollingDown] = useState(false);

  useEffect(() => {
    setSelected(0);
  }, [menu]);

  const scrollDownHandler = (bool) => {
    setIsScrollingDown(true);
  };

  const selectedItems = categories[selected] ? categories[selected].items : [];

  return (
    <div className="w-full xl:w-[500px] flex-1 max-h-full  flex flex-col bg-neutral-900  text-white pt-1  overflow-hidden ">
      <div className="relative border-b-[3px] py-2 border-red-700">
        <CategorySwiper
          selected={selected}
          setSelected={setSelected}
          categories={categories}
        />

        {selected !== 0 && (
          <Arrow
            onClick={() => {
              setSelected((prev) => {
                return prev - 1;
              });
            }}
            direction={"left"}
          />
        )}
        {selected !== categories.length - 1 && (
          <Arrow
            onClick={() => {
              setSelected((prev) => {
                return prev + 1;
              });
            }}
          />
        )}
      </div>

      {selectedItems.length !== 0 ? (
        <>
          <PlateItems onSrollDown={scrollDownHandler} items={selectedItems} />
        </>
      ) : (
        <h1 className="text-4xl text-center mt-10">No items</h1>
      )}
    </div>
  );
};

export default Categories;
