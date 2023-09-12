import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import CategoryItem from "./CategoryItem";
import { useDraggable } from "react-use-draggable-scroll";

const CategorySwiper = ({ categories, setSelected, selected }) => {
  const ref = useRef();
  // const { events } = useDraggable(ref); // Now we pass the reference to the useDraggable hook:

  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    setWidth(ref.current.offsetWidth);
  });

  useEffect(() => {});

  const ratio = width / categories.length;

  return (
    <div
      ref={ref}
      style={{
        left: `-${selected * ratio}px`,
      }}
      // {...events}
      // className={`transition-all w-full px-2  relative duration-150 ease-out  top-0 left-0 flex flex-row gap-5 pb-3  overflow-x-scroll`}
      className={`transition-all w-fit px-2  relative duration-150 ease-out  top-0 left-0 flex flex-row gap-5 pb-3  `}
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
