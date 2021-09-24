import React from 'react'
import './products.css'
import Product from "./product"
import { useState, useEffect } from 'react'
import Pagination from "../Pagination"

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const prods = [
            {
                "name": "Red Bench",
                "category": "people",
                "price": 3.89,
                "currency": "USD",
                "image": {
                    "src": "",
                    "alt": ""
                },
                "bestseller": true,
                "featured": false,
                "details": null
            },
            {
                "name": "Egg Balloon",
                "category": "food",
                "price": 93.89,
                "currency": "USD",
                "image": "",
                "bestseller": false,
                "featured": false,
                "details": null
            },
            {
                "name": "Man",
                "category": "people",
                "price": 100,
                "currency": "USD",
                "image": {
                    "src": "",
                    "alt": ""
                },
                "bestseller": false,
                "featured": false,
                "details": null
            },
        ]
        setProducts(prods)
    }, [])

    const productList = products.map((product, i) => (
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
export default Products