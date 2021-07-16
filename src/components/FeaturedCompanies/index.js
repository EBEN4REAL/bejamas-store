import React from 'react'
import './FeaturedCompanies.css'
import { useState, useEffect } from 'react'
import suitcase from '../../assets/img/suitcase.png'


const FeaturedCompanies = () => {
    const [featCompanies, setFeatCompanies] = useState([]);

    useEffect(() => {
        const companies  = ['GrandParade', 'Seargin', 'DEX Ventures', 'NBC', 'SVT SP Zoo', 'DG Tech', 'PickSaas', 'BlackRose', 'FrontKom']
        setFeatCompanies(companies)
    }, [])
    
    const Companies = featCompanies.map(company => (
        <div className="featCompanies__container ">
            <div className="featcompanies__icon_wrapper d-flex justify-content-center align-items-center">
                <img src={suitcase} width="18" alt="featured company" />
            </div>
            <p className="featured__companies__content text-dark font-bold mt-2">{company}</p>
        </div>
    ))

    return (
        <div className="app-width">
            <div className="mt-50">
                <h1 className="font-bold section__heading text-dark ">Featured Companies</h1>
            </div>
            <div className="mt-4 d-flex mb-5 flex-wrap">
                {Companies}
            </div>
        </div>
    )
}
export default FeaturedCompanies