import "./App.css";
import Header from "./components/Header/Header";
import FoodDrinks from "./components/FoodDrinks/FoodDrinks";
import { CartProvider } from "./context/cart-context";
import ShoppingCart from "./components/UI/ShoppingCart";

function App() {
  return (
    <CartProvider>
      <Header />
      <main className="main-hero max-md:h-[550px] h-[600px]   relative -z-20 ">
        <h1 className=" -z-10 fixed top-1/2 left-1/2 -translate-x-1/2 max-sm:-translate-y-3/4 -translate-y-1/2  text-white text-6xl">
          Menu
        </h1>
      </main>
      <FoodDrinks />
      <ShoppingCart />
    </CartProvider>
  );
}

export default App;
