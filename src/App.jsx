import "./App.css";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <div
        className="flex justify-evenly bg-amber-300"
        data-testid="header-menu"
      >
        <a href="">Home</a>
        <a href="">Shop</a>
        <a href="">Cart</a>
      </div>
      <Home />
      <Shop />
      <Cart />
    </>
  );
}

export default App;

App.jsx;
