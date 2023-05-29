import React from 'react';

import classes from './ProductDetail.module.css';
//import productContext from '../Store/ProductContext';
import {  useParams } from 'react-router-dom';

let productsArr = [
  {
    id: "1",
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    id: "2",
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    id: "3",
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    id:"4",
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];



const ProductDetail = () => {
  // const productCtx = useContext(productContext);
  // //console.log(productCtx);
  // const params=useParams();
  // const imgIds=productCtx.find((imgId)=>imgId.id===params.id);
  const param = useParams();
  console.log(param);
  const imgIds = productsArr.filter((item) => item.id === param.id);
  console.log(...imgIds);




  return (

     <div className={classes.product}>
      <img src={imgIds[0].imageUrl} alt={imgIds.title} />
      <div className={classes.detail}>
        <h3>{imgIds[0].title}</h3>
        <h2>${imgIds[0].price.toFixed(2)}</h2>
        <span className={classes.rating}>Rating <span>{imgIds.rating}&#9733;&#9733;&#9733;</span></span>
        <p>{imgIds[0].detail}</p>
       <button class="btn btn-dark">Add to Cart</button>

      </div>
    </div>
    
  );
};

export default ProductDetail;