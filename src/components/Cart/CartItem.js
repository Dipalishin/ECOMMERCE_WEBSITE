import React from "react";

import classes from "./CartItem.module.css";
import Button from "../UI/Button";
import { Container, Row, Col } from "react-bootstrap";

const CartItem = (props) => {
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
                <Button title="REMOVE" />
              </div>
            </Col>
          </div>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default CartItem;
