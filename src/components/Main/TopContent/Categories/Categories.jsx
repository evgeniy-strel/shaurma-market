import React from 'react';
import { CategoriesInfo } from './CategoriesInfo';
import { useDispatch } from 'react-redux';
import filters from './../../../../redux/reducers/filters';
import { setSortCategory } from '../../../../redux/actions/filters';

function Categories(props) {
  let [activeCategory, setActiveCategory] = React.useState('Все');
  const getNeedClassCategory = (categoryName) => {
    let basisClassCategory = 'button main_categories_category';
    if (activeCategory === categoryName) {
      basisClassCategory += ' main_categories_category_active';
    }
    return basisClassCategory;
  };

  const dispatch = useDispatch();

  const onClickCategory = (category) => {
    setActiveCategory(category);
    dispatch(setSortCategory(category));
  };

  return (
    <div className="main_categories">
      <ul>
        {CategoriesInfo.map((category) => (
          <li
            onClick={() => onClickCategory(category)}
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
