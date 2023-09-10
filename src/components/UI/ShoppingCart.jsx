import React, { useContext } from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { CartContext } from "../../context/cart-context";

import { motion } from "framer-motion";

const ShoppingCart = () => {
  const cartContext = useContext(CartContext);

  return (
    <div className="relative cursor-pointer">
      <div className=" p-5 bg-red-600/60 rounded-full  cursor-pointer transition-all duration-150 hover:bg-red-600/80">
        <ShoppingCartIcon className="  w-6 h-6 text-white " />
        <motion.p
          key={cartContext.cartItems.count}
          animate={{ scale: 1.1 }}
          className="absolute -top-1 right-0 bg-red-700 p-1 rounded-full text-white text-2xl"
        >
          {cartContext.cartItems.count}
        </motion.p>
      </div>
    </div>
  );
};

export default ShoppingCart;
