import {  NavLink } from "react-router-dom";
import HeaderCartButton from "./HeaderCartButton";
import classes from './Header.module.css';
import React from 'react';
const Header = () => {
  return (
    <React.Fragment>
    <header className={classes.header}>
      <nav>
        <ul>
        <li><NavLink to='/homepage' activeClassName={classes.active} >HOME</NavLink></li>
            <li><NavLink to='/store' activeClassName={classes.active}>STORE</NavLink></li>
            <li><NavLink to='/about' activeClassName={classes.active}>ABOUT</NavLink></li>
            <li><NavLink to='/contactus' activeClassName={classes.active}>CONTACT US</NavLink></li>

        </ul>
      </nav>
        <div className={classes.button}>
            <HeaderCartButton />
        </div>
      </header>
    </React.Fragment>
  );
};
export default Header;
