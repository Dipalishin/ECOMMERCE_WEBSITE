import React,{useContext} from 'react';
import ReactDOM from 'react-dom';
import CartContext from '../Store/CartContext';
import classes from './Cart.module.css';
// import Modal from '../UI/Modal';
import CartItem from './CartItem';

const Cart = (props) => {
  let userEmail;
  if (localStorage.getItem('tokenId')) {
    userEmail = JSON.parse(localStorage.getItem('tokenId')).email;
    userEmail = userEmail.replace(/[@.]/g, '');
  }

  const cartCtx = useContext(CartContext);

  const cartElements = cartCtx.item;

  // const cartItemList = cartElements.map((item) => (
  //   <CartItem key={Math.random().toString()} item={item} />
  // ));
  let cartItemList = [];
  let totalAmount = 0;

  // const root = document.getElementById('cartModal');

  if (cartCtx.item) {
    cartItemList = cartElements.map((item) => (
      <CartItem key={Math.random().toString()} item={item} />
    ));
    totalAmount = cartCtx.totalAmount.toFixed(2);
  }

  const purchaseHandler = () => {

    cartCtx.item.forEach(async (item) => {
      try {
        await fetch(
          `https://crudcrud.com/api/261888634f9741079a87c62cc9db5dd5/cartItem${userEmail}/${item._id}`,
          {
            method: 'DELETE',
          }
        );
      } catch (err) {
        console.log(err.message);
      }
    });

    cartCtx.purchased();
  };

  const Cart = () => {
    return (
      <div className={classes.overlay}>
        <span className={classes.title}>CART</span>
        <button className={classes.delete} onClick={props.onClick}>
          X
        </button>
        <div className={classes.heading}>
          <span className={classes.item}>ITEM</span>
          <span className={classes.price}>PRICE</span>
          <span className={classes.quantity}>QUANTITY</span>
        </div>
        {cartItemList}
        <div className={classes.total}>
          <span>Total</span>
          <div>${totalAmount}</div>
        </div>
        {cartItemList.length > 0 && (
          <button className={classes.button} onClick={purchaseHandler}>
            PURCHASE
          </button>
        )}
      </div>
   );
};

const BackDrop = () => {
  return <div className={classes.backDrop} onClick={props.onClick}></div>;
};

const root = document.getElementById('cartModal');

return (
  <React.Fragment>
    {ReactDOM.createPortal(<Cart />, root)}
    {ReactDOM.createPortal(<BackDrop />, root)}
  </React.Fragment>
);
};
export default Cart; 