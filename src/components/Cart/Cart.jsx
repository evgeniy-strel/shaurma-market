import React from "react";
import { Link } from "react-router-dom";
import emptyCart from "./../../img/emptyCart.png";

const Cart = () => {
  return (
    <div className="cart">
      <p className="cart_title">Корзина пустая 😟</p>
      <p className="cart_description">
        Сейчас ваша корзина пуста. <br />
        Для того, чтобы заказать шаверму, перейди на главную страницу.
      </p>
      <img
        className="cart_empty_img"
        src={emptyCart}
        alt="пустая корзина"
        width="300"
        height="255"
      />
      <Link className="cart_go_back_link button" to="/">
        Вернуться назад
      </Link>
    </div>
  );
};

export default Cart;
