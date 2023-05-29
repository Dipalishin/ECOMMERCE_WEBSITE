// import React, { useReducer } from 'react';
import React, { useReducer,useState} from 'react';

// context is created here
export const cartContext = React.createContext({
  item: [],
  quantity: 0,
  addItem: (item) => {},
  removeItem: (item) => {},
});
export default cartContext;

 const defaultState={
item:[],
toAmount:0,
 }

 const cartReducer=(state,action)=>{
   
  if(action.type==="ADD"){
    console.log(state.item.filter((item)=>item.title === action.item.title))
    if(!(state.item.filter((item)=>item.title === action.item.title)).length>0){
    const updateCartItem =  state.item.concat(action.item)
      const updateTotalAmount = state.toAmount + (action.item.price * action.item.amount)
      return {
        item : updateCartItem,
        toAmount : updateTotalAmount
      }
    }else{
      const updatedTotalAmount = state.toAmount + action.item.price * action.item.amount;
        const existingCartItemIndex = state.item.findIndex((item) => item.title === action.item.title)
        const existingCartItem = state.item[existingCartItemIndex];
        const updatedItem = {...existingCartItem,
            amount: existingCartItem.amount + action.item.amount,};
        let  updatedItems = [...state.item];
      updatedItems[existingCartItemIndex] = updatedItem;
      return {
        item: updatedItems,
        toAmount: updatedTotalAmount,
      };
    }
  }
  else if(action.type ==='EDIT'){
    const updatedTotalAmount = state.toAmount + action.item.price * action.item.amount;
        const existingCartItemIndex = state.item.findIndex((item) => item.id === action.item.id)
        const existingCartItem = state.item[existingCartItemIndex];
        const updatedItem = {...existingCartItem,
            amount: existingCartItem.amount + action.item.amount,};
        let  updatedItems = [...state.item];
      updatedItems[existingCartItemIndex] = updatedItem;
      return {
        item: updatedItems,
        toAmount: updatedTotalAmount,
      };
  }else if(action.type==='REMOVE'){
    const existingCartItemIndex = state.item.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.item[existingCartItemIndex];
    const updatedTotalAmount = state.toAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.item.filter(item => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.item];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      item: updatedItems,
      toAmount: updatedTotalAmount
    };
  }

 }
 export const CartContextProvider =(props)=>{
  const [state, dispatch] = useReducer(cartReducer,defaultState)
  const [toggle , setToggle] = useState(false)

  
  const toggleHandler=(toggle)=>{
setToggle(!toggle)
  }
  const cartValueContext ={
    item:state.item,
    toAmount:state.toAmount,
   addItem:((item)=>dispatch({type:"ADD",item:item})),
    removeItem:((id)=>dispatch({type:"REMOVE",id:id})),
    toggleHandler: toggleHandler,
    toggle:toggle
    
  }
  return(
    <cartContext.Provider value={cartValueContext}>
      {props.children}
    </cartContext.Provider>
  )
}

// // default state
// const defaultState = {
//   item: [],
//   totalAmount: 0
// };

// // reducer function
// const cartReducer = (state, action) => {

//   if(action.type === 'ADD') {

//     let updatedCartItem = [...state.item];
//     let updatedAmount = state.totalAmount + action.item.price;

//     const cartItemIndex = state.item.findIndex((item) => (item.title === action.item.title));

//     if(cartItemIndex === -1) {
//       console.log('not same');
//       updatedCartItem = [...updatedCartItem, action.item];

//       return {item: updatedCartItem, totalAmount: updatedAmount};
//     }
//     else {
//       console.log('same');
//       updatedCartItem[cartItemIndex].quantity += 0.5;

//       return {item: updatedCartItem, totalAmount: updatedAmount}
//     }
//   }


//   if(action.type === 'REMOVE') {

//     let updatedCartItem = [...state.item];

//     const cartItemIndex = state.item.findIndex((item) => (item.title === action.title));

//     let updatedAmount = state.totalAmount - updatedCartItem[cartItemIndex].price;

//     console.log(cartItemIndex)

//     if(updatedCartItem[cartItemIndex].quantity === 1) {

//       updatedCartItem = updatedCartItem.filter((item) => (item.title !== action.title))

//       return {item: updatedCartItem, totalAmount: updatedAmount};
//     }
//     else {

//       updatedCartItem[cartItemIndex].quantity -= 0.5;

//       return {item: updatedCartItem, totalAmount: updatedAmount}
//     }
//   }
//   return defaultState;
// };

// export const CartContextProvider = (props) => {
//   const [cartState, dispatchedCartState] = useReducer(cartReducer, defaultState);

//   const addItem = (item) => {
//     dispatchedCartState({type: 'ADD', item: item})
//   }

//   const removeItem = (title) => {
//     dispatchedCartState({type: 'REMOVE', title: title})
//   }
// // export const CartContextProvider = (props) => {
//   let userEmail;
//   if (localStorage.getItem('tokenId')) {
//     userEmail = JSON.parse(localStorage.getItem('tokenId')).email;
//     userEmail = userEmail.replace(/[@.]/g, '');
//   }
//   const [cartState, setCartState] = useState({ item: [], totalAmount: 0 });
//   // const addItem = (updatedCart) => {
//   //   setCartState(updatedCart);
//   // };
//   // const removeItem = (updatedCart) => {
//   //   setCartState(updatedCart);
//   // };
//   const purchased = () => {
//     alert('Your order has been placed');
//     setCartState({ item: [], totalAmount: 0 });
//   };

//   const loginCartHandler = useCallback(async () => {
//     try {
//       const response = await fetch(
//         `https://crudcrud.com/api/261888634f9741079a87c62cc9db5dd5/cartItem${userEmail}`
//       );

//       const data = await response.json();
//       console.log('logging called');
//       if (response.ok) {
//         let refreshedItem = [];
//         let refreshedAmount = 0;

//         data.forEach((item) => {
//           refreshedItem.push(item);
//           refreshedAmount += item.price * item.quantity;
//         });

//         setCartState({ item: refreshedItem, totalAmount: refreshedAmount });
//       } else {
//         throw data.error;
//       }
//     } catch (err) {
//       console.log(err.message);
//     }
//   }, [userEmail]);
//   const logoutCartHandler = () => {
//     setCartState({ item: [], totalAmount: 0 });
//   };

//   const contextValues = {
//     item: cartState.item,
//     totalAmount: cartState.totalAmount,
//     addItem: ((item)=>dispatch({type:"ADD",item:item})),
//     removeItem: ((id)=>dispatch({type:"REMOVE",id:id})),
//     purchased: purchased,
//     logoutCartHandler: logoutCartHandler,
//     loginCartHandler: loginCartHandler,
//   };

//   // const contextValues = {
//   //   item: cartState.item,
//   //   totalAmount: cartState.totalAmount,
//   //   addItem: addItem,
//   //   removeItem: removeItem,
//   // };

//   return (
//     <cartContext.Provider value={contextValues}>
//       {props.children}
//     </cartContext.Provider>
//   );
// };

  