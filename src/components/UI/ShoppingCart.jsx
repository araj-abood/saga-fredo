import React, { useContext } from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { CartContext } from "../../context/cart-context";

import { motion } from "framer-motion";

const ShoppingCart = () => {
  const cartContext = useContext(CartContext);

  return (
    <div className="relative cursor-pointer">
      <div className=" p-2 bg-red-600/60 rounded-sm  cursor-pointer transition-all duration-150 hover:bg-red-600/80 flex items-center gap-4">
        <ShoppingCartIcon className="  w-6 h-6 text-white " />
        <motion.p
          key={cartContext.cartItems.count}
          animate={{ scale: 1.1 }}
          className="  text-white text-lg p-1"
        >
          {cartContext.cartItems.count}
        </motion.p>
      </div>
    </div>
  );
};

export default ShoppingCart;
