import React from "react";
import { addShavermaToCart } from "../../../../redux/actions/cart";

function Product({
  title,
  price,
  weight,
  img,
  description,
  lavash,
  isChangeLavash,
  availableSizes,
  addedCount,
  id,
  dispatch,
}) {
  let selectRef = React.useRef("");
  React.useEffect(() => {
    if (!isChangeLavash) {
      let option = document.createElement("option");
      option.value = lavash;
      option.innerHTML = lavash;
      selectRef.current.appendChild(option);
      selectRef.current.disabled = true;
    }
    selectRef.current.value = lavash;
  }, []);

  let [activeSize, setActiveSize] = React.useState(availableSizes[0]);
  let sizes = ["стандарт", "двойная"];

  const getLiSizeClass = (size) => {
    let sizeClass = activeSize === size ? "product_li_active" : "";
    if (availableSizes.length == 1) {
      if (size != availableSizes[0]) {
        sizeClass += "product_li_disable";
      }
    }
    return sizeClass;
  };

  const calculateValueFromSize = (value) => {
    if ((availableSizes.length === 2) & (activeSize === "двойная")) {
      return parseInt(value * 1.4);
    }
    return value;
  };

  const handleAddProduct = () => {
    dispatch(
      addShavermaToCart({
        id,
        title,
        price: calculateValueFromSize(price),
        weight: calculateValueFromSize(weight),
        img,
        lavash: selectRef.current.value,
        size: activeSize,
      })
    );
  };

  return (
    <div className="product">
      <div className="product_img_card">
        <div className="product_front">
          <img className="product_img" src={img} alt="product" />
        </div>
        <div className="product_back">
          <img
            className="product_img product_img_back"
            src={img}
            alt="product"
          />
          <p>{description}</p>
        </div>
      </div>
      <p className="product_name">Шаверма {title}</p>
      <div className="product_options">
        <ul className="product_size">
          {sizes.map((size) => (
            <li
              className={getLiSizeClass(size)}
              onClick={() => {
                setActiveSize(size);
              }}
              key={size}
            >
              {size}
            </li>
          ))}
        </ul>
        <div className="select">
          <select ref={selectRef} name="select_lavash" id="select_lavash">
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
          {calculateValueFromSize(price)} ₽
          <span>{calculateValueFromSize(weight)} г</span>
        </div>
        <div className="product_button_add" onClick={handleAddProduct}>
          <span className="button_add_plus">+</span> Добавить{" "}
          {addedCount != 0 && <span className="added_count">{addedCount}</span>}
        </div>
      </div>
    </div>
  );
}

export default Product;
