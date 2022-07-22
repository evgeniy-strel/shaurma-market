import React from "react";
import Header from "./components/Header/Header";
import "./style.css";
import Main from "./components/Main/Main";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import { fetchShavermas } from "./redux/actions/shavermas";

function App() {
  const dispatch = useDispatch();
  const { category, sortBy } = useSelector((state) => state.filters);

  React.useEffect(() => {
    fetchShavermas(dispatch, sortBy, category);
  }, [category, sortBy]);

  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
