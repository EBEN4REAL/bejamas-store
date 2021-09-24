import React from 'react'
import { addToCart } from "../../store/actions/CartActions"
import { connect } from 'react-redux';
import { useState } from 'react'
import BannerImg from "../../assets/img/banner.png"

const Cart = (props) => {
    const [cartOpen, setCartOpen] = useState(false);
    
    const addCartItem = (e, product) => {
        e.preventDefault()
        props.dispatch(addToCart(product))
    }
  
    return (
        <>
            <div className="row cart-product-row  pb-2">
                <div className="col-md-9 ">
                    <div className="">
                        <h5 className="font-bold  ">{props.cartItem.name} {props.cartItem.currency}</h5>
                    </div>
                    <div className="">
                        <h4 className="light-grey">{props.cartItem.price}</h4>
                    </div>
                </div>
                <div className="col-md-3 ">
                    <div className="cart-banner" >
                        <img src={BannerImg} className="w-100" />
                    </div>
                </div>
            </div>
        </>

    )
}

function mapStateToProps(state) {
    return {
        cart: state.cart.cartItems
    }
}

export default connect(mapStateToProps)(Cart)

