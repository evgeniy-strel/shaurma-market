import React from "react";
import firmennaya from "./../../img/shaurma/firmennaya.jpg";

const ShoppingCartProduct = () => {
  return (
    <div className="shopping_cart_product">
      <div className="shopping_cart_product_view">
        <div className="img">
          <img src={firmennaya} alt="" />
        </div>
        <div className="shopping_cart_product_view_text">
          <p className="shopping_cart_product_view_text_title">
            Шаверма фирменная
          </p>
          <div className="shopping_cart_product_view_text_options">
            классический лаваш, стандарт
          </div>
        </div>
      </div>
      <div className="shopping_cart_product_quantity">
        <button className="minus"></button>
        <span className="quantity">2</span>
        <button className="plus"></button>
      </div>
      <div className="shopping_cart_product_total_amount">
        <p>420 ₽ </p>
      </div>
      <div className="shopping_cart_product_delete">
        <button></button>
      </div>
    </div>
  );
};

export default ShoppingCartProduct;
