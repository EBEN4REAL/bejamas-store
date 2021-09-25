import React from 'react'
import "./products.css"
import Close from "../../assets/img/closebtn.png"
import { connect } from 'react-redux'


const Filters = ({ showFilters, toggleFilters, filterCategories, updateSelectedCategories }) => {

    const getCatFilter = (e) => {
        const { checked, value } = e.target
        updateSelectedCategories(checked, value)
    }

    const catgoryFilters = filterCategories.map((catFilter, i) => {
        return (
            <div className="checkbox" key={i}>
                <input type="checkbox" id="checkbox2" name="" value={catFilter} id={i} onChange={(e) => getCatFilter(e)}  />
                <label htmlFor={i}><span>{catFilter}</span></label>
            </div>
        )
    })
    
    return (
        <>
            <div className="m-hide">
                <div className="category-filters pb-3">
                    <h6 className="font-bold">Category</h6>
                    {catgoryFilters}
                </div>
                <h6 className="font-bold mt-3" > Price range</h6 >
                <div className="mt-3">
                    <div className="checkbox">
                        <input type="checkbox" id="price_1" name=""  value="" />
                        <label htmlFor="price_1"><span>Lower than $20</span></label>
                    </div>
                    <div className="checkbox">
                        <input type="checkbox" name="" id="price_2" value="" />
                        <label htmlFor="price_2"><span>$20 - $100</span></label>
                    </div>
                    <div className="checkbox">
                        <input type="checkbox" id="price_3" name="" value="" />
                        <label htmlFor="price_3"><span>Lower than $20</span></label>
                    </div>
                    <div className="checkbox">
                        <input type="checkbox" id="price_4" name="" value="" />
                        <label htmlFor="price_4"><span>More than $200</span></label>
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

function mapStateToProps(state) {
    return {
        products: state.products.products
    }
}

export default connect(mapStateToProps)(Filters)

