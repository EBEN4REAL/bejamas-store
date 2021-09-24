import React from 'react'
import CategoryFilters from "./filters"
import Products from "./products"
import ArrowUp from "../../assets/img/arrow-up.png"
import ArrowDown from "../../assets/img/arrow-down.png"
import Caret from "../../assets/img/caret.png"
import "./products.css"

const Filters = () => {
    return (
        <>
            <div className="app-width">
                <div className="d-flex justify-content-between mt-5 mb-3 align-items-center">
                    <div className="">
                        <h4 className="font-bold ">
                            <span className="black-text font-bold mr-2">
                                Photography /
                            </span>
                            <span className="light-grey font-light">
                                Premium Photos
                            </span>
                        </h4>
                    </div>
                    <div className="">
                        <span className="mr-2">
                            <img src={ArrowUp} className="" />
                            <img src={ArrowDown} className="" />
                        </span>
                        <span className="sort-by light-grey mr-3">
                            Sort By
                        </span>
                        <span className="black-text mr-2 price-sort fw-500">
                            Price
                        </span>
                        <span>
                            <img src={Caret} />
                        </span>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-3 ">
                        <CategoryFilters />
                    </div>
                    <div className="col-md-9">
                        <Products />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Filters



    