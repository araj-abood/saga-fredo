import React, { useContext } from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { CartContext } from "../../context/cart-context";

import { motion } from "framer-motion";

const ShoppingCart = () => {
  const cartContext = useContext(CartContext);

  return (
    <div className="fixed right-10 bottom-10 p-5 bg-red-600/60 rounded-full z-50 cursor-pointer transition-all duration-150 hover:bg-red-600/80">
      <ShoppingCartIcon className="  w-10 h-10 text-white " />
      <motion.p
        key={cartContext.cartItems.count}
        animate={{ scale: 1.1 }}
        className="absolute -top-2 right-0 bg-red-700 p-1 rounded-full text-white text-2xl"
      >
        {cartContext.cartItems.count}
      </motion.p>
    </div>
  );
};

export default ShoppingCart;
