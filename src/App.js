import React from "react";
import Header from "./components/Header/Header";
import "./style.css";
import Main from "./components/Main/Main";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";

function App() {
  React.useEffect(() => {
    document.addEventListener("click", (e) => {
      console.log(e);
    });
  });
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shopping_cart" element={<ShoppingCart />} />
      </Routes>
    </div>
  );
}

export default App;
