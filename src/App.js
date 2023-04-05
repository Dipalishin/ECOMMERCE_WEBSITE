import "./App.css";
import Footer from "./components/Footer/Footer";
import About from "./components/Pages/About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./components/Pages/Homepage";
import RootLayout from "./components/Header/Root";
import Store from "./components/Pages/Store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/homepage", element: <Homepage /> },
      { path: "/about", element: <About /> },
      {path:"store",element:<Store/>}
    ],
  },
]);

const productsArr = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

function App() {
  return (
    <>
      <RouterProvider router={router} />

     <Footer /> 
    </>
  );
}

export default App;
