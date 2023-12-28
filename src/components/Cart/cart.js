import React, { useState } from "react";
import Header from '../Header/header'
import Footer from '../Footer/footer'
import { Link } from 'react-router-dom'
import { useCart } from "react-use-cart";

const Cart = () => {

    const { isEmpty, cartTotal, items, updateItemQuantity, removeItem, } = useCart();

         if (isEmpty) return (
            <>
                <Header /> 
                <div className="breadcrumb-option">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="breadcrumb__links">
                                    <a href="/"><i className="fa fa-home"></i> Home</a>
                                    <span>Shopping cart</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container p-5 m-5 text-center"><h1 className="p-5 m-5">Your cart is empty</h1></div>
                <Footer />
            </>
        )
    
    return (
        <div>
            <Header />

            {/* <!-- Breadcrumb Section Begin --> */}

            <section className="breadcrumb-option">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb__text">
                                <h4>Shopping Cart</h4>
                                <div className="breadcrumb__links">
                                    <a href="./home">Home</a>
                                    <a href="./shop">Shop</a>
                                    <span>Shopping Cart</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Breadcrumb Section End --> */}

            {/* <!-- Shopping Cart Section Begin --> */}

            <section className="shopping-cart spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="shopping__cart__table">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Product</th>
                                            <th>Quantity</th>
                                            <th>Total</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {items.map((item) => (
                                        <tr>
                                            <td className="product__cart__item">
                                                <div className="product__cart__item__pic">
                                                    <img src={item.image} alt=""/>
                                                </div>
                                                <div className="product__cart__item__text">
                                                    <h6>{item.name}</h6>
                                                    <h5>BDT {item.price}</h5>
                                                </div>
                                            </td>
                                            <td className="quantity__item">
                                                <div className="quantity">
                                                    <div className="pro-qty-2">
                                                    <button className="btn btn-link" onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                                                        {item.quantity}
                                                    <button className="btn btn-link" onClick={() => updateItemQuantity(item.id, item.quantity + 1)} > + </button>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="cart__price">BDT {item.itemTotal}</td>
                                            <td className="cart__close"><i className="fa fa-close" onClick={() => removeItem(item.id)}></i></td>
                                        </tr>
                                           ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="continue__btn">
                                        <a href="./shop">Continue Shopping</a>
                                    </div>
                                </div>
                                {/* <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="continue__btn update__btn">
                                        <a href="#"><i className="fa fa-spinner"></i> Update cart</a>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        <div className="col-lg-4">
                            
                            <div className="cart__total">
                                <h6>Cart total</h6>
                                <ul>
                                     <li>Total <span>{"BDT" + cartTotal.toFixed(2)}</span></li>
                                 
                                    
                                    {/* <li>Subtotal <span>$ 169.50</span></li>
                                    <li>Total <span>BDT {cartTotal }</span></li> */}
                                </ul>
                                <Link to={"/checkout"} className="primary-btn">Proceed to checkout</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Shopping Cart Section End --> */}

            <Footer />

        </div>
    )
}
export default Cart 