import React from "react";
import Categories from "./Categories/Categories";
import Products from "./Products/Products";

const Main = () => {
    return (
        <main>
            <div className="main">
                <Categories />
                <Products />
            </div>
        </main>
    )
}

export default Main;