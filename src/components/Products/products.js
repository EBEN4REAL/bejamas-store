import React from 'react'
import './products.css'
import Product from "./product"
import { useState, useEffect } from 'react'
import Pagination from "../Pagination"

const Products = () => {
    const [products, setProducts] = useState([]);

    return (
        <>
            <div className="row">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
            <Pagination />
        </>

    )
}
export default Products