import React from "react";
import ShoppingCartBottom from "./ShoppingCartBottom";
import ShoppingCartProduct from "./ShoppingCartProduct";
import ShoppingCartTop from "./ShoppingCartTop";

const ShoppingCart = () => {
  return (
    <div className="shopping_cart_wrapper">
      <div className="shopping_cart">
        <ShoppingCartTop />
        <div className="shopping_cart_products">
          <ShoppingCartProduct />
          <ShoppingCartProduct />
          <ShoppingCartProduct />
        </div>
        <ShoppingCartBottom />
      </div>
    </div>
  );
};

export default ShoppingCart;
