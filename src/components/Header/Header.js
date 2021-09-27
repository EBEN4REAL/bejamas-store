import React from 'react'
import './Header.css'
import Logo from "../../assets/img/logo.png"
import cartIcon from "../../assets/img/cat.png"
import Close from "../../assets/img/closebtn.png"
import { useState } from 'react'
import { connect } from 'react-redux';
import Cart from '../cart';
import { clearCart, showCart } from '../../store/actions/CartActions'

const Header = (props) => {
    
    const removeCart = (e) => {
        e.preventDefault()
        props.dispatch(clearCart())
        props.dispatch(showCart(!props.showCart))
    }

    const cartItems = props.cart.map((cart, i) => {
        return (
            <Cart cartItem={cart} key={i} />
        )
    });


    return (
        <header className="header app-width d-flex justify-content-between align-items-center">
            <div className="logo-container">
                <img src={Logo} alt="Logo" />
            </div>
            <div className="cart position-relative ">
                <div className="cursor-pointer" onClick={() => props.dispatch(showCart(!props.showCart))}>
                    <img src={cartIcon} className="mr-2" alt="cart-icon" />
                    {
                        cartItems.length > 0 ?
                            (
                                <div className="cart-count">
                                    {props.cart.length}
                                </div>
                            )
                            :  null
                    }
                    
                </div>
                {
                    props.showCart ?
                        (
                            <div className="cart-details p-2 pb-3">
                                <div className="pb-2">
                                    <div className="row">
                                        <div className="col-md-12 text-right">
                                            <img alt="cart-dir" src={Close} className="cursor-pointer" onClick={() => props.dispatch(showCart(!props.showCart))} />
                                        </div>
                                    </div>

                                    <div className="mt-4 "></div>
                                    
                                    {
                                        cartItems.length > 0 ?
                                            cartItems
                                            
                                            : (
                                                <div className="mt-4 text-center">No items added yet</div>
                                            )
                                    }

                                    {
                                        cartItems.length > 0 ?
                                            (
                                                <div className="bej-border-bottom mt-3"></div>
                                            )

                                            : null
                                    }

                                    {
                                        cartItems.length > 0 ?
                                            (
                                                <div className="mt-4">
                                                    <button className="bejamas-btn secondary font-bold w-100   " onClick={(e) => removeCart(e)}>CLEAR</button>
                                                </div>
                                            )

                                            : null
                                    }

                                    
                                    
                                    
                                </div>
                            </div>
                        ) : null
                }
            </div>
        </header>
    )
}

function mapStateToProps(state) {
    return {
        cart: state.cart.cartItems,
        showCart: state.cart.showCart
    }
}

export default connect(mapStateToProps)(Header)

