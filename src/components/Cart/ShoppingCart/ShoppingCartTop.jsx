import React from "react";
import { useDispatch } from "react-redux";
import { clearAllCart } from "../../../redux/actions/cart";

const ShoppingCartTop = () => {
  const dispatch = useDispatch();

  const handleClearCart = () => {
    if (window.confirm("Вы действительно хотите очистить корзину?")) {
      dispatch(clearAllCart());
    }
  };

  return (
    <div className="shopping_cart_top">
      <div className="shopping_cart_top_title">
        <div className="shopping_cart_top_title_img"></div>
        <p className="shopping_cart_top_title_text">Корзина</p>
      </div>
      <div className="shopping_cart_top_empty_trash" onClick={handleClearCart}>
        <div className="shopping_cart_top_empty_trash_img"></div>
        <p className="shopping_cart_top_empty_trash_text">Очистить корзину</p>
      </div>
    </div>
  );
};

export default ShoppingCartTop;
