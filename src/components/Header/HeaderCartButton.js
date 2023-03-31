import classes from './HeaderCartButton.module.css';
import React, { useContext } from 'react';
import Cart from '../Cart/Cart';
import cartContext from '../Store/CartContext';
import showCartContext from '../Store/ShowCartContext';
const HeaderCartButton=props=>{

    const cartCtx = useContext(cartContext);
    const showCartCtx = useContext(showCartContext);
  
    let cartQuantity = 0;
  
    if (cartCtx.item) {
      cartCtx.item.forEach((item) => {
        cartQuantity += item.quantity;
      });
    }
  
    return(
        <React.Fragment>
        <button className={classes.cartholder} onClick={showCartCtx.showCart}>
            <span>Cart</span>
            <span className={classes.cartcount}>{cartQuantity}</span>
        </button>
        {showCartCtx.cartState && <Cart/>}

</React.Fragment>
    );


}
export default HeaderCartButton;