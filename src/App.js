import "./App.css";
import Header from "./components/Header/Header";
import FoodDrinks from "./components/FoodDrinks/FoodDrinks";
import { CartProvider } from "./context/cart-context";
import { ItemContextProvider } from "./context/item-context";

function App() {
  return (
    <CartProvider>
      <ItemContextProvider>
        <div className="h-screen  flex flex-col  ">
          <Header />
          <FoodDrinks />
        </div>
      </ItemContextProvider>
    </CartProvider>
  );
}

export default App;
