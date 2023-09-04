import { createContext, useState } from "react";

export const ItemContext = createContext({
  item: null,
  selectItemHandler: () => {},
  deSelectItemHandler: () => {},
});

export const ItemContextProvider = ({ children }) => {
  const [item, setItem] = useState(null);

  const selectItemHandler = (item) => {
    setItem(item);
  };

  const deSelectItemHandler = () => {
    setItem(null);
  };

  return (
    <ItemContext.Provider
      value={{ item, selectItemHandler, deSelectItemHandler }}
    >
      {children}
    </ItemContext.Provider>
  );
};
