import React from 'react';
import Product from './Product/Product';
import { productsInfo } from './ProductsInfo';

function Products(props) {
  return (
    <div className="products">
      <h1>Все шавермы</h1>
      <div className="products_catalog">
        {productsInfo.map((p) => (
          <Product
            title={p.title}
            price={p.price}
            weight={p.weight}
            img={p.img}
            description={p.description}
            lavash={p.lavash}
            isChangeLavash={p.isChangeLavash}
            sizes={['стандарт', 'двойная']}
            key={p.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
