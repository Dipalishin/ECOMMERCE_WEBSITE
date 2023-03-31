import { NavLink} from "react-bootstrap";
import HeaderCartButton from "./HeaderCartButton";
import classes from './Header.module.css';
import React from 'react';
const Header = () => {
  return (
    <React.Fragment>
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to='/home'>
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to='/product'>
              STORE
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to='/about'>
              ABOUT
            </NavLink>
          </li>
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
