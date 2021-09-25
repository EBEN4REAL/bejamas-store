import React from 'react'
import './products.css'
import Product from "./product"
import Pagination from "../Pagination"
import { connect } from 'react-redux'
import { useState, useEffect } from 'react'

const Products = ({ products}) => {
    
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        setCurrentPage(1)
    }, [products])

    const perPage = 6

    const totalPages = Math.ceil(products.length / perPage)

    const startIndex = (perPage * (currentPage - 1))

    const endIndex = currentPage == totalPages
        ? products.length
        : (perPage * currentPage)


    const productList = []
    
    if (products.length) {
        for (let i = startIndex; i < endIndex; i++) {
            const product = products[i]
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
                totalPages={totalPages}
                setCurrentPage={(newPage, mode) => updateCurrentPage(newPage, mode)}
            />
        </>

    )
}

export default Products

