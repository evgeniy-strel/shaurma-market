import React from "react";
import Product from "./Product/Product";
import { useSelector, useDispatch } from "react-redux";
import LoadingProduct from "./Product/LoadingProduct";

const Products = () => {
  const dispatch = useDispatch();
  const { items, isLoaded } = useSelector((state) => state.shavermas);
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="products">
      <h1>Все шавермы</h1>
      <div className="products_catalog">
        {isLoaded
          ? items.map((item) => (
              <Product
                title={item.title}
                price={item.price}
                weight={item.weight}
                img={item.img}
                description={item.description}
                lavash={item.lavash}
                isChangeLavash={item.isChangeLavash}
                availableSizes={item.availableSizes}
                addedCount={
                  cartItems[item.id] ? cartItems[item.id].totalCount : 0
                }
                id={item.id}
                key={item.title}
                dispatch={dispatch}
              />
            ))
          : Array(12)
              .fill(0)
              .map((el, index) => <LoadingProduct key={index} />)}
        {}
      </div>
    </div>
  );
};

export default Products;
