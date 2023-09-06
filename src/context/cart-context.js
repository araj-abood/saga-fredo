import { createContext, useContext, useState } from "react";

export const CartContext = createContext({
  cartItems: {},
  addItemHandler: () => {},
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItem] = useState({ item: [], count: 0 });

  const addItemHandler = (item, load) => {
    console.log(cartItems);
    setCartItem((prevState) => {
      return {
        ...prevState,
        count: prevState.count + load,
      };
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addItemHandler }}>
      {children}
    </CartContext.Provider>
  );
};
