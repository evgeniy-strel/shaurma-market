import React from 'react';

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

  let [sizeShaverma, setSizeShaverma] = React.useState('стандарт');

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
          {props.sizes.map((size) => (
            <li
              className={sizeShaverma === size ? 'product_li_active' : ''}
              onClick={() => {
                setSizeShaverma(size);
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
          {props.price} ₽<span>{props.weight} г</span>
        </div>
        <div className="product_button_add">
          <span className="button_add_plus">+</span> Добавить
        </div>
      </div>
    </div>
  );
}

export default Product;
