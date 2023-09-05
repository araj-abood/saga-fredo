import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import FoodDrinks from "./components/FoodDrinks/FoodDrinks";

const links = [{ title: "menu", colorStyle: "text-green-500" }];

function App() {
  return (
    <>
      <Header />
      <main className="main-hero max-md:h-[550px] h-[600px]   relative -z-20 ">
        <h1 className=" -z-10 fixed top-1/2 left-1/2 -translate-x-1/2 max-sm:-translate-y-3/4 -translate-y-1/2  text-white text-6xl">
          Menu
        </h1>
      </main>
      <FoodDrinks />
    </>
  );
}

export default App;
