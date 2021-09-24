import React from 'react'
import "./products.css"



const Filters = () => {
    return (
        <>
            <div className="category-filters pb-3">
                <h6 className="font-bold">Category</h6>
                <div class="mt-4">
                    <span className="mr-3">
                        <input type="checkbox" />
                    </span>
                    <label>People</label>
                </div>
                <div>
                    <span className="mr-3">
                        <input type="checkbox" />
                    </span>
                    <label>People</label>
                </div>
                <div>
                    <span className="mr-3">
                        <input type="checkbox" />
                    </span>
                    <label>People</label>
                </div>
                <div>
                    <span className="mr-3">
                        <input type="checkbox" />
                    </span>
                    <label>People</label>
                </div>
            </div>
            <h6 className="font-bold mt-3" > Price range</h6 >
            <div className="mt-3">
                <div>
                    <span className="mr-3">
                        <input type="checkbox" />
                    </span>
                    <label>Lower than $20</label>
                </div>
                <div>
                    <span className="mr-3">
                        <input type="checkbox" />
                    </span>
                    <label>$20 - $100</label>
                </div>
                <div>
                    <span className="mr-3">
                        <input type="checkbox" />
                    </span>
                    <label>Lower than $20</label>
                </div>
                <div>
                    <span className="mr-3">
                        <input type="checkbox" />
                    </span>
                    <label>$20 - $100</label>
                </div>
                <div>
                    <span className="mr-3">
                        <input type="checkbox" />
                    </span>
                    <label>$100 - $200</label>
                </div>
                <div>
                    <span className="mr-3">
                        <input type="checkbox" />
                    </span>
                    <label>More than $200</label>
                </div>
            </div>
        </>
    )
}
export default Filters