import React from 'react'
import './StoreInfo.css'
import Prod1 from "../../assets/img/prod1.png"
import Prod2 from "../../assets/img/prod2.png"
import Prod3 from "../../assets/img/prod3.png"

const StoreInfo = () => {
    return (
        <>
            <div className="row justify-content-between app-width mt-4 pb-4 store-info-container">
                <div className="col-md-6">
                    <h6 className="font-bold black-text">About the Samurai King Resting</h6>
                    <p className="grey-text font-bold">Pets</p>
                    <div className="aboutInfo">
                        <p className="grey-text">
                            So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book.So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder <br/><br />

                            text to mockup various fonts for a type specimen book.So how did the classical Latin become so incoherent? According to McClintock.
                        </p>
                    </div>
                </div>
                <div className="col-md-6 about-prods pr-0">
                    <h6 className="font-bold black-text">People also buy</h6>
                    <div className="about-images mt-3">
                        <img src={Prod1} className="mr-3" />
                        <img src={Prod2} className="mr-3" />
                        <img src={Prod3} />
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
export default StoreInfo