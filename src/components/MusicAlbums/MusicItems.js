import React,{useContext} from 'react';
import cartContext from '../Store/CartContext';
import classes from './MusicItem.module.css';
//import Button from '../UI/Button';
import {Card,Button, Container,Col,Row} from "react-bootstrap";

const MusicItems = (props) => {
  const cartctx=useContext(cartContext);
  const addingItemHandler=()=>{
    cartctx.addItem({
      title:props.item.title,
      imageUrl:props.item.imageUrl,
      price:props.item.price,
      quantity:1
    });
  };
  return (
   
    <div className={classes.div}>
<Card style={{ width: '18rem' }}>
<Card.Title>{props.item.title}       
</Card.Title>
<Card.Body>

      <Card.Img variant="top" src={props.item.imageUrl} />
      <Card.Text>
      <Container>
        <Row>
          <Col>
         ${props.item.price}
        </Col>
        
        <Col>
     <Button variant="primary" onClick={addingItemHandler}>Add </Button>
        </Col>
        </Row>
        </Container>
        </Card.Text>
        
      </Card.Body>
    </Card>
    </div>
  );
};

export default MusicItems;

