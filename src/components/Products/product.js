import React from 'react'
import './products.css'
import Prod from "../../assets/img/prod3.png"
import { addToCart } from "../../store/actions/CartActions"
import { connect } from 'react-redux';

const Product = (props) => {
    const product = props.product
    const addCartItem = (e, product) => {
        e.preventDefault()
        props.dispatch(addToCart(product))
    }
    return (
        <>
            <div className="col-md-4 mb-4">
                <div className="product-banner">
                    <img src={Prod} className="w-100" />
                    <button className="bejamas-btn primary w-100" onClick={(e) => addCartItem(e, product)}>ADD TO CART</button>
                    {
                        product.bestseller ?
                            (
                                <div className="product-flag fw-600" >Best Seller</div>
                            ) : null
                    }
                    
                </div>
                <div className="prod-cat font-bold grey-text mt-1">
                    {product.category}
                </div>
                <h5 className="black-text font-bold mt-1">
                    {product.name}
                </h5>
                <h6 className="grey-text mt-2 fw-500">
                    {product.price}
                </h6>
            </div>
        </>

    )
}


function mapStateToProps(state) {
    return {
        cart: state.cart.cartItems
    }
}

export default connect(mapStateToProps)(Product)
