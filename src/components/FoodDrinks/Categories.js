import React, { useEffect, useState } from "react";
import CategoryItem from "./CategoryItem";
import Arrow from "../UI/Arrow";
import PlateItems from "./PlateItems";

const Categories = ({ menu }) => {
  const { categories } = menu;
  const [selected, setSelected] = useState(0);

  const selectedItems = categories[selected].items || false;

  useEffect(() => {
    setSelected(0);
  }, [categories]);

  return (
    <div className="w-[500px] bg-neutral-900 min-h-[600px] text-white pt-5   overflow-hidden">
      <div className="relative border-b border-neutral-200">
        <div
          style={{ translate: `-${selected * 50}px` }}
          className={` w-full transition-all duration-150 ease-out  top-0 left-0 flex flex-row gap-5 pb-5 h-[200px]`}
        >
          {categories.map((cat, index) => {
            return (
              <CategoryItem
                key={cat.title}
                img={cat.img}
                onClick={() => {
                  setSelected(index);
                }}
                selected={selected === index}
                title={cat.title}
              />
            );
          })}
        </div>

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
      {selectedItems ? (
        <PlateItems items={selectedItems} />
      ) : (
        <h1 className="text-4xl text-center mt-10">No items</h1>
      )}
    </div>
  );
};

export default Categories;
