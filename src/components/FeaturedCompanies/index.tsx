import React from 'react'
import './FeaturedCompanies.css'
import { useState, useEffect } from 'react'


const FeaturedCompanies = () => {
    const [featCompanies, setFeatCompanies] = useState<String[]>([]);

    useEffect(() => {
        const companies: string[]  = ['GrandParade', 'Seargin', 'DEX Ventures', 'NBC', 'SVT NP Zoo', 'DG Tech', 'PickSaas', 'BlackRose', 'FrontKom']
        setFeatCompanies(companies)
    }, [])
    
    const Companies = featCompanies.map(company => (
        <div className="featCompanies__container ">
            <div className="featcompanies__icon_wrapper d-flex justify-content-center align-items-center">
                <i className="fa fa-suitcase suitcase" aria-hidden="true"></i>
            </div>
            <p className="para text-dark font-bold text-center">{company}</p>
        </div>
    ))

    return (
        <div className="app-width">
            <div className="mt-50">
                <h1 className="font-bold section__heading text-dark ">Featured Companies</h1>
            </div>
            <div className="mt-3 d-flex mb-5">
                {Companies}
            </div>
        </div>
    )
}
export default FeaturedCompanies