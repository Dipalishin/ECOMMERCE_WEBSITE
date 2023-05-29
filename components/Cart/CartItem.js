import React, { useContext } from 'react'
import classes from "./CartItem.module.css";
import Button from "../UI/Button";
import { Container, Row, Col } from "react-bootstrap";
import CartContext from '../Store/CartContext';

const CartItem = (props) => {

  let userEmail;
  if (localStorage.getItem('tokenId')) {
    userEmail = JSON.parse(localStorage.getItem('tokenId')).email;
    userEmail = userEmail.replace(/[@.]/g, '');
  }


  const cartCtx = useContext(CartContext);

  const removeCartItemHandler = async () => {
    let updatedItem = [...cartCtx.item];
    let updatedAmount = cartCtx.totalAmount;

    const cartItemIndex = updatedItem.findIndex(
      (item) => item.title === props.item.title
    );

    if (updatedItem[cartItemIndex].quantity === 1) {
      try {
        await fetch(
          `https://crudcrud.com/api/73d30df449d64716a91a64d3b64f141e/cartItem${userEmail}/${updatedItem[cartItemIndex]._id}`,
          {
            method: 'DELETE',
          }
        );
        updatedAmount = updatedAmount - updatedItem[cartItemIndex].price;
        updatedItem = updatedItem.filter(
          (item) => item.title !== props.item.title
        );

        cartCtx.removeItem({ item: updatedItem, totalAmount: updatedAmount });
      } catch (err) {
        console.log(err.message);
      }
    } else {
      try {
        await fetch(
          `https://crudcrud.com/api/73d30df449d64716a91a64d3b64f141e/cartItem${userEmail}/${updatedItem[cartItemIndex]._id}`,
          {
            method: 'PUT',
            body: JSON.stringify({
              title: updatedItem[cartItemIndex].title,
              price: updatedItem[cartItemIndex].price,
              imageUrl: updatedItem[cartItemIndex].imageUrl,
              quantity: updatedItem[cartItemIndex].quantity - 1,
            }),
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        updatedAmount = updatedAmount - updatedItem[cartItemIndex].price;
        updatedItem[cartItemIndex].quantity -= 1;

        cartCtx.removeItem({ item: updatedItem, totalAmount: updatedAmount });
      } catch (err) {
        console.log(err.message);
      }
    }
  };
  return (
    <React.Fragment>
      <Container>
        <Row>
          <div className={classes.div}>
            <Col>
              <img src={props.item.imageUrl} alt="Music Album" />
            </Col>
            <Col>
              <span>{props.item.title}</span>
            </Col>
            <Col>
              <span>${props.item.price}</span>
            </Col>
            <Col>
              <div className={classes.cartQuantity}>{props.item.quantity}</div>
            </Col>
            <Col>
              <div>
                <Button title="REMOVE" onClick={removeCartItemHandler}/>
              </div>
            </Col>
          </div>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default CartItem;