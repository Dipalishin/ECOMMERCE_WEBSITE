import "./App.css";
import Footer from "./components/Footer/Footer";
import About from "./components/Pages/About";
import { Route,Redirect,Switch } from "react-router-dom";
import Homepage from "./components/Pages/Homepage";
import ContactUs from "./components/Pages/ContactUs";
import Header from "./components/Header/Header";
import ProductDetail from "./components/Pages/ProductDetail";
import Store from "./components/Pages/Store";
import { ShowCartContextProvider } from "./components/Store/ShowCartContext";
import { ProductContextProvider} from './components/Store/ProductContext';


//import RootLayout from "./components/Header/Root";
//import Store from "./components/Pages/Store";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <RootLayout />,
//     children: [
//       { path: "/homepage", element: <Homepage /> },
//       { path: "/about", element: <About /> },
//       {path:"store",element:<Store/>}
//     ],
//   },
// ]);

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
  return (
    <>
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
<Store productList={productsArr} />
            </Route>
          </ShowCartContextProvider>

          <Route path='/store/:id'>
            <ProductDetail />
          </Route>
        </ProductContextProvider>
      </Switch>

      <Route path='/about'>
        <About />
      </Route>

      <Route path='/contact'>
        <ContactUs />
      </Route>
  <Footer /> 
    </>
  );
}

export default App;
