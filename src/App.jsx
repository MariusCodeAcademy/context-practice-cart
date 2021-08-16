import React, { useState } from "react";
import "./App.css";
import Cart from "./components/Cart";

function App() {
  const [cartItems, setCartItems] = useState([
    { id: 1, title: "Sport Shoes", price: 50 },
    { id: 2, title: "Basketball", price: 30 },
    { id: 3, title: "Baseball bat", price: 40 },
  ]);
  return (
    <div className="App">
      <h3>Context cart</h3>
      <Cart cartItems={cartItems} />
    </div>
  );
}

export default App;
