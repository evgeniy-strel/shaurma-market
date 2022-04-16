import React from "react";

const Sort = (props) => {
  let [activePopup, setActivePopup] = React.useState("популярности");
  const setActivePopupAndClose = (option) => {
    setActivePopup(option);
    setIsVisiblePopup(false);
  };

  let [isVisiblePopup, setIsVisiblePopup] = React.useState(false);
  const toggleVisiblePopup = () => setIsVisiblePopup(!isVisiblePopup);

  let sortRef = React.useRef();
  const handleOutsideClick = (e) => {
    if (!e.path.includes(sortRef.current)) {
      setIsVisiblePopup(false);
    }
  };

  React.useEffect(() => {
    document.body.addEventListener("click", handleOutsideClick);
  });

  return (
    <div className="main_sort" ref={sortRef}>
      <div className="main_sort_title">
        <span className={isVisiblePopup ? "arrow rotated" : "arrow"}></span>
        Сортировка по:{" "}
        <span className="option" onClick={toggleVisiblePopup}>
          {activePopup}
        </span>
      </div>

      {isVisiblePopup && (
        <div className="main_sort_popup">
          <ul>
            {props.sortingOptions.map((option) => (
              <li
                className={activePopup === option ? "popup_active" : ""}
                onClick={() => setActivePopupAndClose(option)}
                key={option}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
