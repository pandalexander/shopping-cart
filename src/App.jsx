import "./App.css";

function App() {
  return (
    <>
      <h1 data-testid="the-big-header">Our First Test</h1>

      <div
        className="flex justify-evenly bg-amber-300"
        data-testid="header-menu"
      >
        <a href="">Home</a>
        <a href="">Shop</a>
        <a href="">Cart</a>
      </div>
    </>
  );
}

export default App;

App.jsx;
