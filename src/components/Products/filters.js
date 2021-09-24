import React from 'react'
import "./products.css"



const Filters = () => {
    return (
        <>
            <div className="m-hide">
                <div className="category-filters pb-3">
                    <h6 className="font-bold">Category</h6>
                    <div class="checkbox">
                        <input type="checkbox" id="checkbox2" name="" value="" />
                        <label for="checkbox2"><span>People</span></label>
                    </div>
                    <div class="checkbox">
                        <input type="checkbox" id="checkbox2" name="" value="" />
                        <label for="checkbox2"><span>People</span></label>
                    </div>
                    <div class="checkbox">
                        <input type="checkbox" id="checkbox2" name="" value="" />
                        <label for="checkbox2"><span>People</span></label>
                    </div>
                </div>
                <h6 className="font-bold mt-3" > Price range</h6 >
                <div className="mt-3">
                    <div class="checkbox">
                        <input type="checkbox" id="checkbox2" name="" value="" />
                        <label for="checkbox2"><span>Lower than $20</span></label>
                    </div>
                    <div class="checkbox">
                        <input type="checkbox" id="checkbox2" name="" value="" />
                        <label for="checkbox2"><span>$20 - $100</span></label>
                    </div>
                    <div class="checkbox">
                        <input type="checkbox" id="checkbox2" name="" value="" />
                        <label for="checkbox2"><span>Lower than $20</span></label>
                    </div>
                    <div class="checkbox">
                        <input type="checkbox" id="checkbox2" name="" value="" />
                        <label for="checkbox2"><span>More than $200</span></label>
                    </div>
                </div>
            </div>
            <div className="m-filters">
                <div className="filter-overlay">
                    <div className="filter-categories">
                        <div className="app-width">
                            <div className="category-filters pb-3">
                                <h4 className="font-bold">Filters</h4>
                                <div class="checkbox">
                                    <input type="checkbox" id="checkbox2" name="" value="" />
                                    <label for="checkbox2"><span>People</span></label>
                                </div>
                                <div class="checkbox">
                                    <input type="checkbox" id="checkbox2" name="" value="" />
                                    <label for="checkbox2"><span>People</span></label>
                                </div>
                                <div class="checkbox">
                                    <input type="checkbox" id="checkbox2" name="" value="" />
                                    <label for="checkbox2"><span>People</span></label>
                                </div>
                            </div>
                            <h4 className="font-bold mt-3" > Price range</h4 >
                            <div className="mt-3">
                                <div class="checkbox">
                                    <input type="checkbox" id="checkbox2" name="" value="" />
                                    <label for="checkbox2"><span>Lower than $20</span></label>
                                </div>
                                <div class="checkbox">
                                    <input type="checkbox" id="checkbox2" name="" value="" />
                                    <label for="checkbox2"><span>$20 - $100</span></label>
                                </div>
                                <div class="checkbox">
                                    <input type="checkbox" id="checkbox2" name="" value="" />
                                    <label for="checkbox2"><span>Lower than $20</span></label>
                                </div>
                                <div class="checkbox">
                                    <input type="checkbox" id="checkbox2" name="" value="" />
                                    <label for="checkbox2"><span>More than $200</span></label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Filters