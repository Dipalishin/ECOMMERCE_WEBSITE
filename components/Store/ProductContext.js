
import React, { useState } from 'react';

const productContext = React.createContext({
  id:'',
  title: '',
  imageUrl: '',
  rating: 0,
  price: 0,
  detail: '',
  changeDetail: (item) => {},
});

export const ProductContextProvider = (props) => {
  const [product, setProduct] = useState({
    id:'',
    title: '',
    imageUrl: '',
    rating: 0,
    price:0,
    detail: '',
  });

  const changeDetailHandler = (item) => {
    // console.log('calledContext');
    setProduct({
      id:item.id,
      title:item.title,
      imageUrl: props.item.imageUrl,
      rating:item.rating,
      detail:item.detail,
      price:item.price,
    });
  };    


  return (
    <productContext.Provider
      value={{
        id:product.id,
        title: product.title,
        imageUrl: product.imageUrl,
        rating: product.rating,
        detail: product.detail,
        price: product.price,
        changeDetail: changeDetailHandler,
      }}
    >
      {props.children}
    </productContext.Provider>
  );
};

export default productContext;