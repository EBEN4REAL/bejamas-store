import React from 'react'
import './products.css'
import Product from "./product"
import Pagination from "../Pagination"
import { connect } from 'react-redux'
import { useState } from 'react'

const Products = (props) => {
    const [currentPage, setCurrentPage] = useState(1)

    const productList = props.products.map((product, i) => (
        <Product key={i} product={product} />
    ));

    return (
        <>
            <div className="row">
                {productList}
            </div>
            
            <Pagination currentPage={currentPage} setCurrentPage={(newPage) => setCurrentPage(newPage)} />
        </>

    )
}

function mapStateToProps(state) {
    return {
        products: state.products.products
    }
}

export default connect(mapStateToProps)(Products)

