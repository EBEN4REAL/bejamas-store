import React from 'react'
import './products.css'
import Product from "./product"
import { useState, useEffect } from 'react'
import Pagination from "../Pagination"
import { connect } from 'react-redux'
import { getProducts } from "../../store/actions/product_actions/productActions"

const Products = (props) => {
    const [products, setProducts] = useState([]);

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

