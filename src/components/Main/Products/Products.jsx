import React from 'react';
import Product from './Product/Product';
import { useSelector } from 'react-redux';

const Products = () => {
  const items = useSelector(({ shavermas }) => shavermas.items);

  return (
    <div className="products">
      <h1>Все шавермы</h1>
      <div className="products_catalog">
        {items.map((item) => (
          <Product
            title={item.title}
            price={item.price}
            weight={item.weight}
            img={item.img}
            description={item.description}
            lavash={item.lavash}
            isChangeLavash={item.isChangeLavash}
            availableSizes={item.availableSizes}
            key={item.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
