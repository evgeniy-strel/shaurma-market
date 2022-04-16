import React from "react";

const ShoppingCartTop = () => {
  return (
    <div className="shopping_cart_top">
      <div className="shopping_cart_top_title">
        <div className="shopping_cart_top_title_img"></div>
        <p className="shopping_cart_top_title_text">Корзина</p>
      </div>
      <div className="shopping_cart_top_empty_trash">
        <div className="shopping_cart_top_empty_trash_img"></div>
        <p className="shopping_cart_top_empty_trash_text">Очистить корзину</p>
      </div>
    </div>
  );
};

export default ShoppingCartTop;
