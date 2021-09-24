import React from 'react'
import './products.css'
import Prod from "../../assets/img/prod3.png"

const Product = () => {
    return (
        <>
            <div className="col-md-4 mb-4">
                <div className="product-banner">
                    <img src={Prod} className="w-100" />
                    <button className="bejamas-btn w-100">ADD TO CART</button>
                    <div className="product-flag fw-600" >Best Seller</div>
                </div>
                <div className="prod-cat font-bold grey-text mt-1">
                    People
                </div>
                <h5 className="black-text font-bold mt-1">
                    Red Bench
                </h5>
                <h6 className="grey-text mt-2 fw-500">
                    $3.89
                </h6>
            </div>
        </>

    )
}
export default Product