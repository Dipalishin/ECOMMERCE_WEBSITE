import "./App.css";
import { useContext,useEffect } from "react";
import Footer from "./components/Footer/Footer";
import About from "./components/Pages/About";
import { Route,Redirect,Switch } from "react-router-dom";
import Homepage from "./components/Pages/Homepage";
import ContactUs from "./components/Pages/ContactUs";
import Header from "./components/Header/Header";
import ProductDetail from "./components/Pages/ProductDetail";
import Store from "./components/Pages/Store";
import Login from "./components/Pages/Login";
import { ProductContextProvider} from './components/Store/ProductContext';
import {ShowCartContextProvider} from "./components/Store/ShowCartContext";
import loginContext from "./components/Store/LoginContext";
import cartContext from "./components/Store/CartContext";

const productsArr = [
  {
    id:'1',
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    id:'2',

    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    id:'3',

    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    id:'4',
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

function App() {
  const loginCtx = useContext(loginContext);
  const cartCtx = useContext(cartContext);

  const {loginCartHandler} = cartCtx;
  const {isloggedIn} = loginCtx;

  // fetching cart data on refresh
  useEffect(() => {
    if (isloggedIn) {
      console.log('called');
      loginCartHandler();
    }
  }, [loginCartHandler, isloggedIn]);


  
  return (
    <>
              {/* <Header onShow={showHandler}/>
      {showModal ? <Cart onHide={hideHandler}/> : null} */}

<ShowCartContextProvider>
        <Header />
      </ShowCartContextProvider>
      
      <Route path='/' exact>
        <Redirect to='/homepage' />
      </Route>

      <Route path='/homepage'>
        <Homepage />
      </Route>

      <Switch>
        <ProductContextProvider>

        <ShowCartContextProvider>
                     <Route path='/store' exact>
              {loginCtx.isloggedIn && <Store productList={productsArr} />}
              {!loginCtx.isloggedIn && <Redirect to='/login' />}
            </Route>
          

         <Route path='/store/:id'> 
                   {loginCtx.isloggedIn && <ProductDetail />}
            {!loginCtx.isloggedIn && <Redirect to='/login' />}
          </Route>
          </ShowCartContextProvider>

        </ProductContextProvider>
      
      </Switch>

      <Route path='/about'>
        <About />
      </Route>

      <Route path='/contact'>
        <ContactUs />
      </Route>

      <Route path='/login'>
        {!loginCtx.isloggedIn && <Login />}
        {loginCtx.isloggedIn && <Redirect to='/home' />}
      </Route>

  <Footer /> 
    </>
  );
}

export default App;
