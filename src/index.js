import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./config";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


















// import React from 'react';
// import ReactDOM from "react-dom/client";

// import './index.css';
// import Home from './components/Home/home';
// import Contact from './components/Contact/contact';
// import Shop from './components/Shop/shop';
// import Blog from './components/Blog/blog';
// import About from './components/About/about';
// import BlogDetails from './components/BlogDetails/blogdetails';
// import Cart from './components/Cart/cart';
// import Checkout from './components/Checkout/checkout';
// import Banner from './components/Banner/banner';


// import reportWebVitals from './reportWebVitals';

// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";

// import { CartProvider } from 'react-use-cart';


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/home",
//     element: <Home />,
//   },
//   {
//     path: "/contact",
//     element: <Contact />,
//   },
//   {
//     path: "/shop",
//     element: <Shop />,
//   },
//   {
//     path: "/cart",
//     element: <Cart />,
//   },
  
//   {
//     path: "/blog",
//     element: <Blog />,
//   },
//   {
//     path: "/about",
//     element: <About />,
//   },
//   {
//     path: "/blogdetails",
//     element: <BlogDetails />,
//   },
//   {
//     path: "/checkout",
//     element: <Checkout />,
//   },
//   {
//     path: "/banner",
//     element: <Banner />,
//   },
//   ]);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <CartProvider>
//     <RouterProvider router={router} />
//     </CartProvider>
//   </React.StrictMode>
// );
// reportWebVitals();