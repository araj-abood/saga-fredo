import React, { useLayoutEffect, useRef, useState } from "react";
import CategoryItem from "./CategoryItem";

const CategorySwiper = ({ categories, setSelected, selected }) => {
  const ref = useRef();

  console.log(ref);

  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    setWidth(ref.current.offsetWidth);
  }, []);

  const ratio = width / categories.length;

  return (
    <div
      ref={ref}
      style={{ left: `-${selected * ratio}px` }}
      className={`transition-all  relative w-fit duration-150 ease-out  top-0 left-0 flex flex-row gap-5 pb-5 h-[200px]`}
    >
      {categories.map((cat, index) => {
        return (
          <CategoryItem
            key={index}
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
  );
};

export default CategorySwiper;
