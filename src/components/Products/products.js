import React from 'react'
import './products.css'
import Product from "./product"
import Pagination from "../Pagination"
import { connect } from 'react-redux'
import { useState } from 'react'

const Products = ({products}) => {
    const [currentPage, setCurrentPage] = useState(1)

    const perPage = 6

    const startIndex = (perPage * (currentPage - 1))

    const endIndex = ((perPage * currentPage))

    const productList = []
    console.log('****')
    console.log(startIndex)
    console.log(endIndex)
    
    if (products.length) {
        for (let i = startIndex; i < endIndex; i++) {
            const product = products[i]
            console.log(products[i])
            productList.push(
                (
                    <Product key={i} product={product} />
                )
            )
        }
    }

    const updateCurrentPage = (newPage, mode) => {
        if (mode == 'num') {
            setCurrentPage(newPage)
        } else {
            if (mode === 'sub') {
                setCurrentPage(currentPage => currentPage - 1)
            } else {
                setCurrentPage(currentPage => currentPage + 1)
            }
        }
    } 

    return (
        <>
            <div className="row">
                {productList}
            </div>

            <Pagination
                currentPage={currentPage}
                perPage={perPage}
                setCurrentPage={(newPage, mode) => updateCurrentPage(newPage, mode)}
            />
        </>

    )
}

function mapStateToProps(state) {
    return {
        products: state.products.products
    }
}

export default connect(mapStateToProps)(Products)

