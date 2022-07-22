import React from "react";
import { useDispatch } from "react-redux";
import {
  deleteItemFromCart,
  minusItemToCart,
  plusItemToCart,
} from "./../../../redux/actions/cart";

const ShoppingCartProduct = ({ item, countItem }) => {
  const dispatch = useDispatch();

  const getClassLavash = (lavash) => {
    let classLavash = "";
    switch (lavash) {
      case "сырный":
        classLavash += "cheese";
        break;
      case "чесночный":
        classLavash += "garlic";
        break;
      case "томатный":
        classLavash += "tomato";
        break;
      case "фирменный":
        classLavash += "branded";
        break;
    }
    return classLavash;
  };

  const handleDeleteItem = () => {
    if (window.confirm("Вы действительно хотите удалить эти шавермы?")) {
      dispatch(deleteItemFromCart(item));
    }
  };

  const handleMinusItem = () => {
    dispatch(minusItemToCart(item));
  };

  const handlePlusItem = () => {
    dispatch(plusItemToCart(item));
  };

  return (
    <div className="shopping_cart_product">
      <div className="shopping_cart_product_view">
        <div className="img">
          <img src={item.img} alt="" />
        </div>
        <div className="shopping_cart_product_view_text">
          <p className="shopping_cart_product_view_text_title">{item.title}</p>
          <div className="shopping_cart_product_view_text_options">
            <span className={getClassLavash(item.lavash)}>
              {`${item.lavash} лаваш`}
            </span>
            , <span>{item.size}</span>
          </div>
        </div>
      </div>
      <div className="shopping_cart_product_quantity">
        <button className="minus" onClick={handleMinusItem}>
          –
        </button>
        <span className="quantity">{countItem}</span>
        <button className="plus" onClick={handlePlusItem}>
          +
        </button>
      </div>
      <div className="shopping_cart_product_total_amount">
        <p>{item.price * Number(countItem)} ₽ </p>
      </div>
      <div className="shopping_cart_product_delete">
        <button onClick={handleDeleteItem}>x</button>
      </div>
    </div>
  );
};

export default ShoppingCartProduct;
