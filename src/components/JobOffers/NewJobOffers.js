import React from 'react'
import './NewJobOffer.css'
import JobOffer from '../JobOffer'
import { useState, useEffect } from 'react'


const NewJobOffers = () => {
    const [jobOffers, setFeatCosetJobOffermpanies] = useState([]);

    useEffect(() => {
        const jobOffers = [
            {
                role: 'Junior Java Developer',
                city: 'PickSaas',
                address: 'Wrclaw, Polska',
                timeStamp: '2 hours ago',
                jobDescription: 'I am currently looking for a java developer. Project for public sector location: Wroclaw (during the pandemic remote work)',
                showCompensation: true,
                compensation: '$ up to PLN 550 net / MD B2B'
            },
            {
                role: 'Junior Project Manager',
                city: 'FrontKom',
                address: 'Lublin, Polska',
                timeStamp: '3 hours ago',
                jobDescription: 'I am currently looking for a java developer. Project for public sector location: Wroclaw (during the pandemic remote work)',
                showCompensation: false,
            },
            {
                role: 'Junior Java Developer',
                city: 'PickSaas',
                address: 'Wrclaw, Polska',
                timeStamp: '2 hours ago',
                jobDescription: 'I am currently looking for a java developer. Project for public sector location: Wroclaw (during the pandemic remote work)',
                showCompensation: true,
                compensation: '$ up to PLN 550 net / MD B2B'
            }
        ]
        setFeatCosetJobOffermpanies(jobOffers)
    }, [])

    const jobOffersList = jobOffers.map((jobOffer, i) => (
        <JobOffer key={i} jobOffer={jobOffer} />
    ));

   
    return (
        <div className="app-width">
            <div className='d-flex justify-content-between align-items-center  mt-4'>
                <div>
                    <h1 className="font-bold job__offfer__heading">Newest Job Offers</h1>
                </div>
                <div>
                    <a href='#' className="details__link">View all jobs offers</a>
                    <i className="fa fa-long-arrow-right details-icon ml-2" aria-hidden="true"></i>
                </div>
            </div>
            <div className="mt-2  d-flex justify-content-between">
                {jobOffersList}
            </div>
        </div>
    )
}
export default NewJobOffers