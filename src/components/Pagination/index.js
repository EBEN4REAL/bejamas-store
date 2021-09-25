import React from 'react'
import './Pagination.scss'
import LeftArrow from "../../assets/img/left-arrow.png"
import RightArrow from "../../assets/img/right-arrow.png"
import { connect } from 'react-redux';
import { useState, useEffect } from 'react'

const Pagination = ({products}) => {

    return (
        <div className="text-center mt-5">
            <div className="d-flex align-items-center justify-content-center">
                <div className="mr-3">
                    <img src={LeftArrow} width="10" alt="left-arrow"  />
                </div>
                <div className="mr-3">
                    <span className="mr-3 light-grey">
                        1
                    </span>
                    <span className="mr-3 black-text font-bold">
                        2
                    </span>
                    <span className="light-grey">
                        3
                    </span>
                </div>
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



