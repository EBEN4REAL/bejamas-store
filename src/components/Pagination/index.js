import React from 'react'
import './Pagination.scss'
import LeftArrow from "../../assets/img/left-arrow.png"
import RightArrow from "../../assets/img/right-arrow.png"
import { connect } from 'react-redux';

const Pagination = ({  currentPage, setCurrentPage, totalPages }) => {


    const numsArr = []
    
    for (let i = 1; i <= totalPages; i++) {
        numsArr.push(
            (
                <div key={i} onClick={() => setCurrentPage(i, "num")}>
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
                {
                    currentPage !== 1 &&

                    (
                        <div className="mr-3 cursor-pointer" onClick={() => setCurrentPage(1, "sub")}>
                            <img src={LeftArrow} width="10" alt="left-arrow" />
                        </div>
                    )
                }
                
                {numsArr}

                {
                    currentPage !== totalPages &&

                    (
                        <div className="cursor-pointer">
                            <img src={RightArrow} width="10" alt="right-arrow" onClick={() => setCurrentPage(1, "add")} />
                        </div>
                    )
                }
                
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



