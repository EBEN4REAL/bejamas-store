import React from 'react'
import './JobOffer.css'


const JobOffer = ({ jobOffer }) => {
    // role: 'Junior Java Developer',
    //     city: 'PickSaas',
    //         address: 'Wrclaw, Polska',
    //             timeStamp: '2 hours ago',
    //                 jobDescription: 'I am currently looking for a java developer. Project for public sector location: Wroclaw (during the pandemic remote work)',
    //                     showCompensation: true
    return (
        <div className="joboffer pr-3 position-relative">
            <div className="">
                <div className="d-flex align-items-center justify-content-between">
                    <div className="">
                        <div className="joboffer__header">{jobOffer.role}</div>
                        <div className="mt-1">
                            <span className="mr-3 para">{jobOffer.city}</span>
                            <span className="para job-location">
                                {jobOffer.address}
                            </span>
                            
                        </div>
                    </div>
                    <div className="joboffer__timestamp">{jobOffer.timeStamp}
                    </div>
                </div>
                <div className="mt-3">
                    <div className="text-grey w-95 para">{jobOffer.jobDescription}
                    </div>
                </div>
                <div className="d-flex justify-content-between mt-1">
                    <div className="text-grey para">
                    {
                        jobOffer.showCompensation
                            ? (
                               jobOffer.compensation
                              )
                            : null
                    }
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