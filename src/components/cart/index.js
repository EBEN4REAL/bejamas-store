import React from 'react'
import { connect } from 'react-redux';

const Cart = (props) => {

    return (
        <>
            <div className="row cart-product-row  pb-2">
                <div className="col-md-9 ">
                    <div className="">
                        <h5 className="font-bold  ">{props.cartItem.name} </h5>
                    </div>
                    <div className="">
                        <h4 className="light-grey">{props.cartItem.currency} {props.cartItem.price}</h4>
                    </div>
                </div>
                <div className="col-md-3 ">
                    <div className="cart-banner" style={{ backgroundImage: `url(${props.cartItem.image.src})` }}>
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

