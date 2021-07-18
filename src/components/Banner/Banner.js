import React from 'react'
import './Banner.css'
import BannerImg from '../../assets/img/resume_for_devops.jpg'

const Banner = () => {
    return (
        <div className="banner d-flex align-items-center position-relative" style={{ backgroundImage: `url(${BannerImg})` }}>
            <div class="overlay"></div>
            <div className="banner__container app-width">
                <h2 className="banner__header text-white mt-5">
                    Juniors make IT work.
                </h2>
                <p className="text-white">Hire and invest in highly skilles juniors now.</p>
                <div className="mt-3">
                    <button className="btn ">Post Offer Now</button>
                </div>
            </div>
        </div>
    )
}
export default Banner