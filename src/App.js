import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/home';
import Contact from './components/Contact/contact';
import Shop from './components/Shop/shop';
import Blog from './components/Blog/blog';
import About from './components/About/about';
import BlogDetails from './components/BlogDetails/blogdetails';
import Cart from './components/Cart/cart';
import Checkout from './components/Checkout/checkout';
// import reportWebVitals from './reportWebVitals';
import { CartProvider } from 'react-use-cart';
import Signin from './components/Admin/Signin/signin';
import Register from './components/Admin/Register/register';
import Dashboard from './components/Admin/Dashboard/dashboard';
import Protected from './components/Protected';
import Product from './components/Admin/Product/Product';
import ProductDetail from './components/ProductDetail/productDetail';
import Blogs from './components/Admin/Blogs/blogs';
import Coupon from './components/Admin/Coupon/coupon';
import Order from './components/Admin/Order/order';


function App() {
  
  const [isSignedIn, setIsSignedIn] = useState(() => {
    const userLogged = localStorage.getItem("access_token");
    return userLogged || false;
  });
  
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/Blogdetails" element={<BlogDetails />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/productDetails" element={<ProductDetail />} />

          
           <Route
            path="/dashboard"
            element={
              <Protected isSignedIn={isSignedIn}>
                <Dashboard />
              </Protected>
            }
          />
           <Route
            path="/shop"
            element={
              <Protected isSignedIn={isSignedIn}>
                <Shop />
              </Protected>
            }
          /> 
           <Route
            path="/product"
            element={
              <Protected isSignedIn={isSignedIn}>
                <Product />
              </Protected>
            }
          />

            <Route
            path="/blogs"
            element={
              <Protected isSignedIn={isSignedIn}>
                <Blogs />
              </Protected>
            }
          />
           <Route
            path="/coupon"
            element={
              <Protected isSignedIn={isSignedIn}>
                <Coupon />
              </Protected>
            }
          />
           <Route
            path="/order"
            element={
              <Protected isSignedIn={isSignedIn}>
                <Order />
              </Protected>
            }
          />

        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;












// import './App.css';
// import Home from './components/Home/home';

// function App() {
//   return (
//     <div>
//       <Home />
//     </div>
//   );
// }

// export default App;