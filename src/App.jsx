import "./App.css";
import Home from "./components/Home";
import Shop from "./components/Shop";

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
    </>
  );
}

export default App;

App.jsx;
