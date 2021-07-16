import React from 'react'
import './JobOffer.css'

const JobOffer = (Component: React.FC) => {
    return (
        <div className="joboffer pr-3 position-relative">
            <div className="">
                <div className="d-flex align-items-center justify-content-between">
                    <div className="">
                        <div className="joboffer__header">Junior Java Developer</div>
                        <div className="mt-1">
                            <span className="mr-3 para">PickSaas</span>
                            <span className="para job-location">
                                Wrclaw, Polska
                            </span>
                            
                        </div>
                    </div>
                    <div className="joboffer__timestamp">2 hours ago
                    </div>
                </div>
                <div className="mt-3">
                    <div className="text-grey w-95 para">I am currently looking for a java developer. Project for public sector location: Wroclaw (during the pandemic remote work)
                    </div>
                </div>
                <div className="d-flex justify-content-between mt-1">
                    <div className="text-grey para">
                        $ up to PLN 550 net / MD  B2B
                    </div>
                    <div>
                        <div className="details__btn d-flex justify-content-center align-items-center">
                            <i className="fa fa-angle-right text-white details__btn__icon" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default JobOffer