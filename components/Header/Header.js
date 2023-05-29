import {  NavLink } from "react-router-dom";
import HeaderCartButton from "./HeaderCartButton";
import classes from './Header.module.css';
import React,{useContext} from 'react';
import loginContext from '../Store/LoginContext';
import cartContext from '../Store/CartContext';

const Header = () => {
  const loginCtx = useContext(loginContext);
  const cartCtx = useContext(cartContext);

  const logoutHandler = () => {
    loginCtx.logout();
    cartCtx.logoutCartHandler();
  };
  return (
    <React.Fragment>
    <header className={classes.header}>
      <nav>
        <ul>
        <li><NavLink to='/homepage' activeClassName={classes.active} >HOME</NavLink></li>
        <li><NavLink to='/store' activeClassName={classes.active}>STORE</NavLink></li>
            <li><NavLink to='/about' activeClassName={classes.active}>ABOUT</NavLink></li>
            <li><NavLink to='/contact' activeClassName={classes.active}>CONTACT US</NavLink></li>
            {!loginCtx.isloggedIn &&
            <li><NavLink to='/login' activeClassName={classes.active}>LOGIN</NavLink></li>}
            {loginCtx.isloggedIn && (
              <li  onClick={logoutHandler}>
                <NavLink activeClassName={classes.active} to='/login'>
                  LOGOUT
                </NavLink>
              </li>
            )}
         
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
