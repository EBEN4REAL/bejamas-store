import React from 'react'
import './StoreInfo.css'
import Prod1 from "../../assets/img/prod1.png"
import Prod2 from "../../assets/img/prod2.png"
import Prod3 from "../../assets/img/prod3.png"
import { connect } from 'react-redux';
import { useState, useEffect } from 'react'


const StoreInfo = (props) => {
    const [featProduct, setFeaturedProduct] = useState(null)

    useEffect(() => {
        const featuredProduct = props.products.filter((product) => product.featured === true)[0]
        setFeaturedProduct(featuredProduct)
    })

    return (
        <>
            <div className="row justify-content-between app-width mt-4 pb-4 store-info-container">
                <div className="col-md-6 about-info">
                    <h4 className="font-bold black-text">About the {featProduct ? featProduct.name : ''}</h4>
                    <p className="grey-text font-bold">{featProduct ? featProduct.categeory :  ''}</p>
                    <div className="aboutInfo">
                        <p className="grey-text">
                            {featProduct ? featProduct.details.description : ''} <br />
                        </p>
                    </div>
                </div>
                <div className="col-md-6 about-prods pr-0">
                    <h6 className="font-bold black-text">People also buy</h6>
                    <div className="about-images mt-3">
                        <img src={Prod1} className="mr-3" alt="other-prod" />
                        <img src={Prod2} className="mr-3" alt="other-prod " />
                        <img src={Prod3} alt="other-prod " alt="other-prod "/>
                    </div>
                    <div className="mt-5">
                        <h6 className="font-bold black-text">Details</h6>
                        <p className="grey-text">Size: 1020 x 1020 pixel</p>
                        <p className="grey-text">Size: 15 mb</p>
                    </div>
                </div>
            </div>
        </>

    )
}


function mapStateToProps(state) {
    return {
        products: state.products.products
    }
}

export default connect(mapStateToProps)(StoreInfo)

