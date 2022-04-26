import React from 'react';
import Products from './Products/Products';
import TopContent from './TopContent/TopContent';

const Main = () => {
  return (
    <main>
      <div className="main">
        <TopContent />
        <Products />
      </div>
    </main>
  );
};

export default Main;
