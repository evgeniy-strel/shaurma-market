import React from 'react';
import testImg from './../../../../img/shaurma/kurinaya.jpg';

function Product(props) {
  let selectRef = React.useRef('');
  React.useEffect(() => {
    if (!props.isChangeLavash) {
      let option = document.createElement('option');
      option.value = props.lavash;
      option.innerHTML = props.lavash;
      selectRef.current.appendChild(option);
      selectRef.current.disabled = true;
    }
    selectRef.current.value = props.lavash;
  });

  let [activeSize, setActiveSize] = React.useState(props.availableSizes[0]);
  let sizes = ['стандарт', 'двойная'];

  const getLiSizeClass = (size) => {
    let sizeClass = activeSize === size ? 'product_li_active' : '';
    if (props.availableSizes.length == 1) {
      if (size != props.availableSizes[0]) {
        sizeClass += 'product_li_disable';
      }
    }
    return sizeClass;
  };

  const calculateValueFromSize = (value) => {
    if ((props.availableSizes.length === 2) & (activeSize === 'двойная')) {
      return parseInt(value * 1.4);
    }
    return value;
  };

  return (
    <div className="product">
      <div className="product_img_card">
        <div className="product_front">
          <img className="product_img" src={props.img} alt="product" />
        </div>
        <div className="product_back">
          <img className="product_img product_img_back" src={props.img} alt="product" />
          <p>{props.description}</p>
        </div>
      </div>
      <p className="product_name">Шаверма {props.title}</p>
      <div className="product_options">
        <ul className="product_size">
          {sizes.map((size) => (
            <li
              className={getLiSizeClass(size)}
              onClick={() => {
                setActiveSize(size);
              }}
              key={size}>
              {size}
            </li>
          ))}
        </ul>
        <div className="select">
          <select ref={selectRef} name="" id="select_lavash">
            <option value="классический">классический лаваш</option>
            <option value="сырный">сырный лаваш</option>
            <option value="чесночный">чесночный лаваш</option>
            <option value="томатный">томатный лаваш</option>
          </select>
          <div className="select_arrow"></div>
        </div>
      </div>
      <div className="product_price_add">
        <div className="product_price">
          {calculateValueFromSize(props.price)} ₽
          <span>{calculateValueFromSize(props.weight)} г</span>
        </div>
        <div className="product_button_add">
          <span className="button_add_plus">+</span> Добавить
        </div>
      </div>
    </div>
  );
}

export default Product;
