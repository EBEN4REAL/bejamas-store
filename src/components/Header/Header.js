import React from 'react'
import './Header.css'
import Logo from "../../assets/img/logo.png"
import cartIcon from "../../assets/img/cat.png"
import Close from "../../assets/img/closebtn.png"
import { useState } from 'react'
import { connect } from 'react-redux';
import Cart from '../cart';
import { clearCart } from '../../store/actions/CartActions'

const Header = (props) => {
    const [cartOpen, setCartOpen] = useState(false);
    
    const removeCart = (e) => {
        e.preventDefault()
        props.dispatch(clearCart())
        setCartOpen(!cartOpen)
    }

    const cartItems = props.cart.map((cart, i) => {
        console.log(cart)
        return (
            <Cart cartItem={cart} key={i} />
        )
    });


    return (
        <header className="header app-width d-flex justify-content-between align-items-center">
            <div className="logo-container">
                <img src={Logo} />
                {cartOpen}
            </div>
            <div className="cart position-relative ">
               
                <div className="cursor-pointer" onClick={() => setCartOpen(!cartOpen)}>
                    <img src={cartIcon}   />
                    <div className="cart-count">
                        {props.cart.length}
                    </div>
                </div>
                {
                    cartOpen ?
                        (
                            <div className="cart-details p-2 pb-3">
                                <div className="pb-2">
                                    <div className="row">
                                        <div className="col-md-12 text-right">
                                            <img src={Close} className="cursor-pointer" onClick={() => setCartOpen(!cartOpen)} />
                                        </div>
                                    </div>
                                    <div className="mt-4"></div>
                                    
                                    {cartItems}

                                    <div className="bej-border-bottom"></div>
                                    
                                    <div className="mt-4">
                                        <button className="bejamas-btn secondary font-bold w-100   " onClick={(e) => removeCart(e)}>CLEAR</button>
                                    </div>
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
        cart: state.cart.cartItems
    }
}

export default connect(mapStateToProps)(Header)

