import React from 'react'
import './NewJobOffer.css'
import JobOffer from '../JobOffer'
import { useState, useEffect } from 'react'


const NewJobOffers = () => {
    const [jobOffers, setFeatCosetJobOffermpanies] = useState([]);

    useEffect(() => {
        const jobOffers = [
            {
                id: 1,
                role: 'Junior Java Developer',
                city: 'PickSaas',
                address: 'Wrclaw, Polska',
                timeStamp: '2 hours ago',
                jobDescription: 'I am currently looking for a java developer. Project for public sector location: Wroclaw (during the pandemic remote work)',
                showCompensation: true,
                compensation: '$ up to PLN 550 net / MD B2B'
            },
            {
                id: 2,
                role: 'Junior Project Manager',
                city: 'FrontKom',
                address: 'Lublin, Polska',
                timeStamp: '3 hours ago',
                jobDescription: 'Join us in the Lublin office to build innvovative long-term projects.Exciting international clients and partners and work environment focused on learning',
                showCompensation: false,
                compensation: '$ up to PLN 550 net / MD B2B'
            },
            {
                id: 3,
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
        <JobOffer key={i} jobOffer={jobOffer}  />
    ));

   
    return (
        <div className="app-width">
            <div className='d-flex justify-content-between align-items-center  mt-4'>
                <div>
                    <div className="font-bold section__heading">Newest Job Offers</div>
                </div>
                <div>
                    <div className="details__link">View all jobs offers  <i className="fa fa-long-arrow-right details-icon ml-2" aria-hidden="true"></i></div>
                </div>
            </div>
            <div className="mt-4 row">
                {jobOffersList}
            </div>
        </div>
    )
}
export default NewJobOffers