import React from 'react'
import './Banner.css'
import BannerImg from "../../assets/img/banner.png"

const Banner = () => {
    return (
        <>
            <div className="app-width d-flex justify-content-between mt-5 mb-3 align-items-center about-container">
                <div className="">
                    <h3 className="font-bold banner-header ">Samurai King Resting</h3>
                </div>
                <div className="">
                    <button className="bejamas-btn primary add-to-cart">ADD TO CART</button>
                </div>
            </div>
            <div className="banner app-width d-flex align-items-center position-relative position-relative" style={{ backgroundImage: `url(${BannerImg})` }}>
                <div className="banner-caption   font-bold" >Photo of the day</div>
            </div>
        </>
        
    )
}
export default Banner