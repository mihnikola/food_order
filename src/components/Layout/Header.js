import React from "react";
import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";
import { Fragment } from "react/cjs/react.production.min";
import HeaderButton from "./HeaderButton";
const  Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React meals</h1>
        <HeaderButton onClick={props.onShowCart}/>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage}  alt="food" />
      </div>
    </Fragment>
  );
};

export default Header;
