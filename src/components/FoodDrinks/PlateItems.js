import React, { useContext, useEffect, useRef, useState } from "react";
import { ItemContext } from "../../context/item-context";
import { CartContext } from "../../context/cart-context";
import PlateContent from "./PlateContent";

const PlateItems = ({ items }) => {
  const divRef = useRef();
  const itemContext = useContext(ItemContext);
  const cartContext = useContext(CartContext);

  useEffect(() => {
    divRef.current.scrollTo({ top: 0 });
  }, [items]);

  return (
    <div
      ref={divRef}
      className={` flex-1 max-h-full pb-14 top-0 overflow-y-scroll `}
    >
      <div className="flex flex-col  mt-5 gap-4 px-5 ">
        {items.map((item, index) => {
          return <PlateContent key={item.title} item={item} index={index} />;
        })}
      </div>
    </div>
  );
};

export default PlateItems;
