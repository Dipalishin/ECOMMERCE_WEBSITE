import React,{useContext} from 'react';
import cartContext from '../Store/CartContext';
import classes from './MusicItem.module.css';
import Button from '../UI/Button';
//import ProductDetail from '../Pages/ProductDetail';
import { Link } from 'react-router-dom';
//import {Button, Container,Col,Row} from "react-bootstrap";

const MusicItems = (props) => {
  console.log(props.item);
  const cartctx=useContext(cartContext);
  //console.log(cartctx);
  const addingItemToCartHandler=()=>{
    cartctx.addItem({
      id:props.item.id,
      title:props.item.title,
      imageUrl:props.item.imageUrl,
      price:props.item.price,
      quantity:1
    });
  };                                                             
return (
  <div className={classes.div}>
  <div className={classes.container}>
        <h3>{props.item.title}</h3>
  <div className={classes.div} >
<Link to={`/store/${props.item.id}`}>
    <img src={props.item.imageUrl} alt='Music Album' />
    </Link>
       </div>
       <div>
        <span>
       ${props.item.price}</span>
    <Button title='ADD TO CART' onClick={addingItemToCartHandler}/>
</div>
  </div>
  </div>
);
};

export default MusicItems;

