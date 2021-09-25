import React from 'react'
import "./products.css"
import Close from "../../assets/img/closebtn.png"

const Filters = ({ showFilters, toggleFilters }) => {
    

    return (
        <>
            <div className="m-hide">
                <div className="category-filters pb-3">
                    <h6 className="font-bold">Category</h6>
                    <div className="checkbox">
                        <input type="checkbox" id="checkbox2" name="" value="" />
                        <label htmlFor="checkbox2"><span>People</span></label>
                    </div>
                    <div className="checkbox">
                        <input type="checkbox" id="checkbox2" name="" value="" />
                        <label htmlFor="checkbox2"><span>People</span></label>
                    </div>
                    <div className="checkbox">
                        <input type="checkbox" id="checkbox2" name="" value="" />
                        <label htmlFor="checkbox2"><span>People</span></label>
                    </div>
                </div>
                <h6 className="font-bold mt-3" > Price range</h6 >
                <div className="mt-3">
                    <div className="checkbox">
                        <input type="checkbox" id="checkbox2" name="" value="" />
                        <label htmlFor="checkbox2"><span>Lower than $20</span></label>
                    </div>
                    <div className="checkbox">
                        <input type="checkbox" id="checkbox2" name="" value="" />
                        <label htmlFor="checkbox2"><span>$20 - $100</span></label>
                    </div>
                    <div className="checkbox">
                        <input type="checkbox" id="checkbox2" name="" value="" />
                        <label htmlFor="checkbox2"><span>Lower than $20</span></label>
                    </div>
                    <div className="checkbox">
                        <input type="checkbox" id="checkbox2" name="" value="" />
                        <label htmlFor="checkbox2"><span>More than $200</span></label>
                    </div>
                </div>
            </div>
            {
                showFilters ?
                    (
                        <div className="m-filters">
                            <div className="filter-overlay">
                                <div className="filter-categories">
                                    <div className="app-width">
                                        <div className="category-filters pb-3 pt-3">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="">
                                                    <h4 className="font-bold">Filters</h4>
                                                </div>
                                                <div className="">
                                                    <img src={Close} alt="close-btn" onClick={() => toggleFilters()} />
                                                </div>
                                            </div>
                                            <div className="checkbox">
                                                <input type="checkbox" id="checkbox2" name="" value="" />
                                                <label htmlFor="checkbox2"><span>People</span></label>
                                            </div>
                                            <div className="checkbox">
                                                <input type="checkbox" id="checkbox2" name="" value="" />
                                                <label htmlFor="checkbox2"><span>People</span></label>
                                            </div>
                                            <div className="checkbox">
                                                <input type="checkbox" id="checkbox2" name="" value="" />
                                                <label htmlFor="checkbox2"><span>People</span></label>
                                            </div>
                                        </div>
                                        <h4 className="font-bold mt-3" > Price range</h4 >
                                        <div className="mt-3">
                                            <div className="checkbox">
                                                <input type="checkbox" id="checkbox2" name="" value="" />
                                                <label htmlFor="checkbox2"><span>Lower than $20</span></label>
                                            </div>
                                            <div className="checkbox">
                                                <input type="checkbox" id="checkbox2" name="" value="" />
                                                <label htmlFor="checkbox2"><span>$20 - $100</span></label>
                                            </div>
                                            <div className="checkbox">
                                                <input type="checkbox" id="checkbox2" name="" value="" />
                                                <label htmlFor="checkbox2"><span>Lower than $20</span></label>
                                            </div>
                                            <div className="checkbox">
                                                <input type="checkbox" id="checkbox2" name="" value="" />
                                                <label htmlFor="checkbox2"><span>More than $200</span></label>
                                            </div>
                                            <div className="checkbox">
                                                <input type="checkbox" id="checkbox2" name="" value="" />
                                                <label htmlFor="checkbox2"><span>Lower than $20</span></label>
                                            </div>
                                            <div className="checkbox">
                                                <input type="checkbox" id="checkbox2" name="" value="" />
                                                <label htmlFor="checkbox2"><span>$20 - $100</span></label>
                                            </div>
                                            <div className="checkbox">
                                                <input type="checkbox" id="checkbox2" name="" value="" />
                                                <label htmlFor="checkbox2"><span>Lower than $20</span></label>
                                            </div>
                                            <div className="checkbox">
                                                <input type="checkbox" id="checkbox2" name="" value="" />
                                                <label htmlFor="checkbox2"><span>More than $200</span></label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="filter-btns p-3">
                                <div className="d-flex justify-content-between">
                                    <button className="bejamas-btn secondary font-weight w-100 mr-3  ">CLEAR</button>
                                    <button className="bejamas-btn primary w-100  ">SAVE</button>
                                </div>
                            </div>
                        </div>
                        
                    )
                    : null
            }
           
        </>
    )
}
export default Filters