import React from "react";
import { Link } from "react-router-dom";

const ShoppingCartBottom = ({ totalCount, totalPrice }) => {
  return (
    <div className="shopping_cart_bottom">
      <div className="shopping_cart_bottom_text">
        <p className="quantity_products">
          Всего шаверм: <span>{totalCount} шт.</span>
        </p>
        <p className="total_amount_products">
          Сумма заказа: <span>{totalPrice} ₽</span>
        </p>
      </div>
      <div className="shopping_cart_bottom_buttons">
        <Link className="button button_go_back" to="/">
          <span className="arrow_left"></span>
          Вернуться назад
        </Link>
        <Link className="button button_pay" to="/cart">
          Оплатить сейчас
        </Link>
      </div>
    </div>
  );
};

export default ShoppingCartBottom;
