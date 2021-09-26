import React from 'react'
import './Banner.css'
import { connect } from 'react-redux'
import { useState, useEffect } from 'react'
import { addToCart } from '../../store/actions/CartActions'

const Banner = (props) => {

    const [featProduct, setFeaturedProduct] = useState(null)

    useEffect(() => {
        const featuredProduct = props.products.filter(product => product.featured === true)[0]
        setFeaturedProduct(featuredProduct)
    })
   

    return (
        <>
            <div className="app-width d-flex justify-content-between mt-5 mb-3 align-items-center about-container">
                <div className="">
                    <h3 className="font-bold banner-header ">{featProduct ? featProduct.name : ''}</h3>
                </div>
                <div className="">
                    <button className="bejamas-btn primary add-to-cart" onClick={(e) => props.dispatch(addToCart(featProduct))}>ADD TO CART</button>
                </div>
            </div>
            <div className="banner app-width d-flex align-items-center position-relative position-relative" style={{ backgroundImage: `url(${featProduct ? featProduct.image.src: ''})` }}>
                <div className="banner-caption   font-bold" >Photo of the day</div>
            </div>
        </>
        
    )
}
function mapStateToProps(state) {
    return {
        products: state.products.products
    }
}

export default connect(mapStateToProps)(Banner)

