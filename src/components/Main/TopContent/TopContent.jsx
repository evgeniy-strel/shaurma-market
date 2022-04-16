import React from "react";
import Categories from "./Categories/Categories";
import Sort from "./Sort/Sort";

const TopContent = () => {
  return (
    <div className="main_top_content">
      <Categories />
      <Sort sortingOptions={["популярности", "цене", "алфавиту"]} />
    </div>
  );
};

export default TopContent;
