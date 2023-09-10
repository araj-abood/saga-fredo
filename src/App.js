import "./App.css";
import Header from "./components/Header/Header";
import FoodDrinks from "./components/FoodDrinks/FoodDrinks";
import { CartProvider } from "./context/cart-context";

function App() {
  return (
    <CartProvider>
      <main className="main-hero z-0 max-md:h-[550px] h-[600px] relative ">
        <Header />

        <h1 className="fixed top-1/2 left-1/2 -translate-x-1/2 max-sm:-translate-y-3/4 -translate-y-1/2 -z-50  text-white text-6xl">
          Menu
        </h1>
      </main>
      <FoodDrinks />
    </CartProvider>
  );
}

export default App;
