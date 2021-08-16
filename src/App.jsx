import React, { useState } from "react";
import "./App.css";
import Cart from "./components/Cart";
import ItemContext from "./store/ItemContext";

function App() {
  const [cartItems, setCartItems] = useState([
    { id: 1, title: "Sport Shoes", price: 50 },
    { id: 2, title: "Basketball", price: 30 },
    { id: 3, title: "Baseball bat", price: 40 },
  ]);
  const [discount, setDiscount] = useState(20);

  // sukurti applyDiscount funkcija ir joje iskonsolinti kad veikia.
  const applyDiscount = () => {
    console.log("hello from applyDiscount");
  };
  // perduoti funkcija i context value,
  // pasiimiti ja CartIteme ir ten ivygdyti paspaudus mygtuka

  return (
    <ItemContext.Provider
      value={{
        discount,
        onApplyDiscount: applyDiscount,
      }}
    >
      <div className="App">
        <h3>Context cart App component</h3>
        <Cart cartItems={cartItems} />
      </div>
    </ItemContext.Provider>
  );
}

export default App;
