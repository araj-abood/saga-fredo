import React, { useContext } from "react";
import { ItemContext } from "../../context/item-context";
import DisplayItemContent from "./DisplayItemContent";
import { AnimatePresence } from "framer-motion";

const DisplayItem = () => {
  const { item, deSelectItemHandler } = useContext(ItemContext);

  return (
    <AnimatePresence>
      {item && <DisplayItemContent item={item} onExit={deSelectItemHandler} />}
    </AnimatePresence>
  );
};

export default DisplayItem;
