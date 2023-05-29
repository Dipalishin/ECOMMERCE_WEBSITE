import classes from "./Section.module.css";
import MusicAlbums from '../MusicAlbums/MusicAlbum';
import Cart from "../Cart/Cart";
import { useState } from "react";
import React from "react";

const Section=props=>{
    const [showCartItem,setShowCartItem]=useState(false);
    const cartItemHandler=()=>{
        setShowCartItem(true);
    }

    return(
        <section className={classes.section}>
            <div className={classes.header}>
      <h1>The Generics</h1>    </div>
      <MusicAlbums productList={props.productList} />

     <button className={classes.button} onClick={cartItemHandler}>See the cart</button>
     {showCartItem && <Cart/>}
     </section>    
 
    );
}
export default Section;