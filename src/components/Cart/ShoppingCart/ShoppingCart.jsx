import React from "react";
import ShoppingCartBottom from "./ShoppingCartBottom";
import ShoppingCartProduct from "./ShoppingCartProduct";
import ShoppingCartTop from "./ShoppingCartTop";
import { useSelector } from "react-redux";

const ShoppingCart = () => {
  const { items, totalCount, totalPrice } = useSelector((state) => state.cart);

  const allValues = [].concat(
    ...Object.values(items).map((itemSpecificId) =>
      Object.values(itemSpecificId)
    )
  );

  const itemsByType = allValues.filter((value) => Array.isArray(value));

  return (
    <div className="shopping_cart_wrapper">
      <div className="shopping_cart">
        <ShoppingCartTop />
        <div className="shopping_cart_products">
          {itemsByType.map((itemByType) => (
            <ShoppingCartProduct
              item={itemByType[0]}
              countItem={itemByType.length}
            />
          ))}
        </div>
        <ShoppingCartBottom totalCount={totalCount} totalPrice={totalPrice} />
      </div>
    </div>
  );
};

export default ShoppingCart;
