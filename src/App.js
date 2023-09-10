import "./App.css";
import Header from "./components/Header/Header";
import FoodDrinks from "./components/FoodDrinks/FoodDrinks";
import { CartProvider } from "./context/cart-context";

function App() {
  return (
    <CartProvider>
      <Header />

      <FoodDrinks />
    </CartProvider>
  );
}

export default App;
