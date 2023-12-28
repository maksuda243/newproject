import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
// import './assets/css/bootstrap.min.css';
// import './assets/css/font-awesome.min.css';
import './assets/css/elegant-icons.css';
import './assets/css/magnific-popup.css';
import './assets/css/nice-select.css';
// import './assets/css/owl.carousel.min.css';
import './assets/css/slicknav.min.css';
import './assets/css/style.css';
import { logout } from "../Admin/Auth/auth";



const Header = () => {

    const [isSignedIn, setIsSignedIn] = useState(() => {
        const userLogged = localStorage.getItem("access_token");
        return userLogged || false;
      });

      const signout = () => {
        setIsSignedIn(false);
        logout();
      }


    const {totalUniqueItems} = useCart();


    return (
        <div>
        {/* <!-- Offcanvas Menu Begin --> */}

    <div className="offcanvas-menu-overlay"></div>
    <div className="offcanvas-menu-wrapper">
        <div className="offcanvas__option">

            {isSignedIn ? (
            <div className="offcanvas__links">
                <a href="./signin">Sign Out</a>
                </div>
            ) : (
                <div className="offcanvas__links">
                <a href="./signin">Sign in</a>
                <a href="./register">Register</a>
            </div>
            )}



            <div className="offcanvas__top__hover">
                <span>Usd <i className="arrow_carrot-down"></i></span>
                <ul>
                    <li>USD</li>
                    <li>EUR</li>
                    <li>USD</li>
                </ul>
            </div>
        </div>
        <div className="offcanvas__nav__option">
            <a href="#" className="search-switch"><img src="assets/img/icon/search.png" alt=""/></a>
            <a href="#"><img src="assets/img/icon/heart.png" alt=""/></a>
            <a href="#"><img src="assets/img/icon/cart.png" alt=""/> <span>0</span></a>
            <div className="price">$0.00</div>
        </div>
        <div id="mobile-menu-wrap"></div>
        <div className="offcanvas__text">
            <p>Free shipping, 30-day return or refund guarantee.</p>
        </div>
    </div>
    {/* <!-- Offcanvas Menu End --> */}

    {/* <!-- Header Section Begin --> */}

    <header className="header">
        <div className="header__top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-7">
                        <div className="header__top__left">
                            <p>Free shipping, 30-day return or refund guarantee.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-5">
                        <div className="header__top__right">

                            {isSignedIn ? (
                             <div className="header__top__links">
                                <button className="btn btn-link" type="button" onClick={signout}>
                                    Sign out
                                </button>
                                <button className="btn btn-link" type="button"> <a href="./dashboard">Dashboard</a></button>
                                </div>
                             ) : (
                                <div className="header__top__links">
                                <a href="./signin">
                                    Sign in
                                    </a>
                                <a href="./register">
                                    Register
                                    </a>
                               </div>
                            )}

                            <div className="header__top__hover">
                                <span>Usd <i className="arrow_carrot-down"></i></span>
                                <ul>
                                    <li>USD</li>
                                    <li>EUR</li>
                                    <li>USD</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-3">
                    <div className="header__logo">
                        <a href="./index.html"><img src="assets/img/logo.png" alt=""/></a>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <nav className="header__menu mobile-menu">
                        <ul>
                            <li className="active"><Link to={"/home"}>Home</Link></li>
                            <li><Link to={"/shop"}>Shop</Link></li>
                            <li><a href="#">Pages</a>
                                <ul className="dropdown">
                                    <li><Link to={"/about"}>About Us</Link></li>
                                    <li><a href="./shop-details.html">Shop Details</a></li>
                                    <li><Link to={"/cart"}>Shopping Cart</Link></li>
                                    <li><Link to={"/checkout"}>Check Out</Link></li>
                                    <li><Link to={"/blogdetails"}>Blog Details</Link></li>
                                </ul>
                            </li>
                            <li><Link to={"/blog"}>Blog</Link></li>
                            <li><Link to={"/contact"}>Contacts</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="col-lg-3 col-md-3">
                    <div className="header__nav__option">
                        <a href="#" className="search-switch"><img src="assets/img/icon/search.png" alt=""/></a>
                        <a href="#"><img src="assets/img/icon/heart.png" alt=""/></a>
                        <Link to={"/cart"}><img src="assets/img/icon/cart.png" alt=""/> <span>{totalUniqueItems}</span> </Link>
                        {/* <div className="price">BDT 0.00</div> */}
                    </div>
                </div>
            </div>
            <div className="canvas__open"><i className="fa fa-bars"></i></div>
        </div>
    </header>
    {/* <!-- Header Section End --> */}

        </div>
    )
}
export default Header