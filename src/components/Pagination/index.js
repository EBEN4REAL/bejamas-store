import React from 'react'
import './Pagination.scss'
import LeftArrow from "../../assets/img/left-arrow.png"
import RightArrow from "../../assets/img/right-arrow.png"
import { connect } from 'react-redux';
import { useState, useEffect } from 'react'

const Pagination = ({ products, currentPage, setCurrentPage }) => {

    useEffect(() => {

    })

    const perPage = 6

    const totalPages = Math.ceil(products.length / perPage)

    console.log(totalPages)
    console.log(currentPage)
    
    const numsArr = []
    
    for (let i = 1; i <= totalPages; i++) {
        numsArr.push(
            (
                <div key={i} onClick={() => setCurrentPage(i)}>
                    <span className={`mr-3 light-grey pagination-number fw-500 ${currentPage === i && 'active-page '} cursor-pointer`}>
                        {i}
                    </span>
                </div>

            )
        )
    }

    return (
        <div className="text-center mt-5">
            <div className="d-flex align-items-center justify-content-center">
                <div className="mr-3">
                    <img src={LeftArrow} width="10" alt="left-arrow"  />
                </div>
                {numsArr}
                <div>
                    <img src={RightArrow} width="10" alt="right-arrow" />
                </div>
            </div>
        </div>
    )
}


function mapStateToProps(state) {
    return {
        products: state.products.products
    }
}

export default connect(mapStateToProps)(Pagination)



