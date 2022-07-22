import React from "react";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import EmptyCart from "./EmptyCart/EmptyCart";
import { useSelector } from "react-redux";

const Cart = () => {
  const { totalCount } = useSelector((state) => state.cart);
  return totalCount > 0 ? <ShoppingCart /> : <EmptyCart />;
};

export default Cart;
