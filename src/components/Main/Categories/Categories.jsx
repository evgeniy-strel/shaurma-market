import React from 'react';
import { CategoriesInfo } from './CategoriesInfo';

function Categories(props) {
  let [activeCategory, setActiveCategory] = React.useState('Все');
  const getNeedClassCategory = (categoryName) => {
    let basisClassCategory = 'button main_categories_category';
    if (activeCategory === categoryName) {
      basisClassCategory += ' main_categories_category_active';
    }
    return basisClassCategory;
  };
  return (
    <div className="main_categories">
      <ul>
        {CategoriesInfo.map((category) => (
          <li
            onClick={() => setActiveCategory(category)}
            className={getNeedClassCategory(category)}
            key={category}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
