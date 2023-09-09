import React, { useEffect, useState } from "react";
import CategoryItem from "./CategoryItem";
import Arrow from "../UI/Arrow";
import PlateItems from "./PlateItems";

import { Swiper, SwiperSlide } from "swiper/react";
import CategorySwiper from "./CategorySwiper";

const Categories = ({ menu }) => {
  const { categories } = menu;
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    setSelected(0);
  }, [menu]);

  const selectedItems = categories[selected] ? categories[selected].items : [];

  return (
    <div className="w-full lg:w-[500px]  bg-neutral-900 min-h-[600px] text-white pt-5 overflow-hidden">
      <div className="relative border-b py-2 border-neutral-200">
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
          {" "}
          <h2 className="text-center text-4xl mt-3 text-white border-b border-white pb-2">
            {categories[selected].title}
          </h2>
          <PlateItems items={selectedItems} />
        </>
      ) : (
        <h1 className="text-4xl text-center mt-10">No items</h1>
      )}
    </div>
  );
};

export default Categories;
