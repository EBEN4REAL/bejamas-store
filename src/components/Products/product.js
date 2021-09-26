import React from 'react'
import './products.css'
import { addToCart, showCart } from "../../store/actions/CartActions"
import { connect } from 'react-redux';
import { useState } from 'react';

const Product = (props) => {
    const [onHover, setHoverState] = useState(false);

    const product = props.product

    const addCartItem = (e, product) => {
        e.preventDefault()
        props.dispatch(addToCart(product))
        props.dispatch(showCart(true))
    }

    return (
        <>
            <div className="col-md-4 mb-4">
                {onHover.state}
                <div className="product-banner position-relative" onMouseEnter={() => setHoverState(true)} onMouseLeave={() => setHoverState(false)} style={{ backgroundImage: `url(${product.image.src})` }}>
                    {
                        onHover ?
                            
                            (
                                <button className="bejamas-btn primary w-100 product-btn" onClick={(e) => addCartItem(e, product)}>ADD TO CART</button>
                            )
                            
                            : null
                    }
                   
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
                    {product.currency}  {product.price}
                </h6>
            </div>
        </>

    )
}


function mapStateToProps(state) {
    return {
        cart: state.cart.cartItems,
        showCart: state.cart.showCart
    }
}

export default connect(mapStateToProps)(Product)
