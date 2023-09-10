import React, { useState } from "react";
import DrinkTypeCard from "./DrinkTypeCard";

const DrinkTypeSelector = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="h-[100px] flex ">
      <DrinkTypeCard
        title={"Cold Drinks"}
        img="https://images.unsplash.com/photo-1613616122854-81845b831aff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbGQlMjBkcmlua3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        selected={selected === 0}
        onSelect={() => {
          setSelected(0);
        }}
      />
      <DrinkTypeCard
        title={"Hot Drinks"}
        img="https://images.unsplash.com/photo-1450024529642-858b23834369?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG90JTIwZHJpbmtzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        selected={selected === 1}
        onSelect={() => {
          setSelected(1);
        }}
      />
    </div>
  );
};

export default DrinkTypeSelector;
