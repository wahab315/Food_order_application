import React from "react";
import classes from "./Header.module.css";
import mealsImage from "../.././../assests/meals.jpg";

// Icons from react icon
import { MdShoppingCart } from "react-icons/md";

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>React Meals</h1>
        {/* <button>Cart</button> */}

        <HeaderButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Meal Image" />
      </div>
    </>
  );
};

export default Header;

const HeaderButton = () => {
  return (
    <>
      <button className={classes.button}>
        <span className={classes.icon}>
          <MdShoppingCart />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>3</span>
      </button>
    </>
  );
};
