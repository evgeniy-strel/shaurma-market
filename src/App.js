import React from "react";
import Header from "./components/Header/Header";
import "./style.css";
import Main from "./components/Main/Main";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setShavermas } from './redux/actions/shavermas';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    axios
      .get('http://localhost:3001/items')
      .then(({data}) => dispatch(setShavermas(data)));
  }, []);
  
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
