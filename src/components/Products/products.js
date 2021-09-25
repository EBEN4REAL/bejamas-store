import React from 'react'
import './products.css'
import Product from "./product"
import Pagination from "../Pagination"
import { connect } from 'react-redux'

const Products = (props) => {

    const productList = props.products.map((product, i) => (
        <Product key={i} product={product} />
    ));

    return (
        <>
            <div className="row">
                {productList}
            </div>
            <Pagination />
        </>

    )
}

function mapStateToProps(state) {
    return {
        products: state.products.products
    }
}

export default connect(mapStateToProps)(Products)

