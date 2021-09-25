import React from 'react'
import CategoryFilters from "./filters"
import Products from "./products"
import ArrowUp from "../../assets/img/arrow-up.png"
import ArrowDown from "../../assets/img/arrow-down.png"
import MobileFilter from "../../assets/img/mobile-filter.png"
import Caret from "../../assets/img/caret.png"
import "./products.css"
import { connect } from 'react-redux';
import { useState, useEffect } from 'react'
import { getProducts } from "../../store/actions/product_actions/productActions"

const ProductsWrapper = (props) => {
    const [featProduct, setFeaturedProduct] = useState(null)
    const [showFilters, setShowFilters] = useState(false)
    const [showPriceSort, setShowPriceSort] = useState(false)
    const [priceSortDir, setDriceSortDir] = useState('select order')
    const [selectedCategories, setSelectedCategories] = useState({})
    const [selectedPrice, setSelectedPrice] = useState([])
    const [productsList, setProductsList] = useState([])
    const catsObj = {}

    useEffect(() => {
        let prodList = []
        if (!selectedPrice.length) {
            Object.keys(selectedCategories).forEach(selCat => {
                prodList = prodList.concat(catsObj[selCat])
            })
            setProductsList(prodList)
        } else {
            if (!(Object.keys(selectedCategories).length)) {
                prodList = props.products.filter(cur => {
                    if (cur.price >= selectedPrice[0] && cur.price < selectedPrice[1]) {
                        return cur
                    }
                })
                setProductsList(prodList)
            } else {
                Object.keys(selectedCategories).forEach(selCat => {
                    prodList = prodList.concat(catsObj[selCat])
                })
                prodList = prodList.filter(cur => {
                    if (cur.price >= selectedPrice[0] && cur.price < selectedPrice[1]) {
                        return cur
                    }
                })
                setProductsList(prodList)
            }
        }
        
    }, [selectedCategories, selectedPrice])


    const updateSelectedCategories = (checked, value) => {
        if (checked) {
            setSelectedCategories({ ...selectedCategories, [value]: value })
        } else {
            const categoryVar = {
                ...selectedCategories
            }
            delete categoryVar[value]
            setSelectedCategories({ ...categoryVar })
        }
       
    }

    const updateSelectedPrices = (value) => {
        setSelectedPrice(value)
    }

    if (props.products.length) {
        props.products.forEach((product) => {
            const productCategory = product.category
            if (catsObj[productCategory]) {
                catsObj[productCategory].push(product)
            } else {
                catsObj[productCategory] = [product]
            }
        })
    }



    const filterCategories = Object.keys(catsObj)

    useEffect(() => {
        const featuredProduct = props.products.filter((product) => product.featured === true)[0]
        setFeaturedProduct(featuredProduct)
    }, [featProduct])


    const toggleFilters = () => {
        setShowFilters(!showFilters)
    }

    const getPriceSortDir = (e) => {

        const products = [...props.products]
        
        if (e.target.value === 'asc') {
            products.sort((a, b) => {
                return a.price > b.price ? 1 : -1
            })
        } else if (e.target.value === 'desc') {
            products.sort((a, b) => {
                return a.price > b.price ? -1 : 1
            })
        }
        
        setDriceSortDir(e.target.value)

        props.dispatch(getProducts(products))
        setShowPriceSort(false)
    }

    const sortProducts = (order) => {

        const products = [...props.products]

        if (order === 'asc') {
            products.sort((a, b) => {
                return a.name > b.name ? 1 : -1
            })
        } else {
            products.sort((a, b) => {
                return a.name > b.name ? -1 : 1
            })
        }
        
        props.dispatch(getProducts(products))
    }

    
    return (
        <>
            <div className="app-width">
                <div className="d-flex justify-content-between mt-5 mb-3 align-items-center">
                    <div className="">
                        <h4 className="font-bold filter-header">
                            <span className="black-text font-bold mr-2">
                                Photography /
                            </span>
                            <span className="light-grey font-light">
                                Premium Photos
                            </span>
                        </h4>
                    </div>
                    <div className="m-hide position-relative">
                        <span className="mr-2">
                            <img src={ArrowUp} alt="up-arrow" className="cursor-pointer" onClick={() => sortProducts('asc')} />
                            <img src={ArrowDown} alt="down-arrow" className="cursor-pointer" onClick={() => sortProducts('desc')} />
                        </span>
                        <span onClick={() => setShowPriceSort(!showPriceSort)} className="cursor-pointer">
                            <span className="sort-by light-grey mr-3 ">
                                Sort By
                            </span>
                            <span className="black-text mr-2 price-sort fw-500" >
                                Price
                            </span>
                            <span>
                                <img src={Caret} alt="caret" />
                            </span>
                        </span>
                        {
                            showPriceSort ?
                                (
                                    <div className="mt-2 price-sort-dir">
                                        <select value={priceSortDir} onChange={(e) => getPriceSortDir(e)} >
                                            <option value="select order">Choose order</option>
                                            <option value="asc">Ascending</option>
                                            <option value="desc">Descending</option>
                                        </select>
                                    </div>
                                ) 
                                : null
                        }
                        
                       
                    </div>
                    <div className="mobile-filter">
                        <img src={MobileFilter} onClick={toggleFilters} alt="mobile-filter" />
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-3 filters-container">
                        <CategoryFilters
                            showFilters={showFilters}
                            toggleFilters={toggleFilters}
                            filterCategories={filterCategories}
                            updateSelectedCategories={(checked, value) => updateSelectedCategories(checked, value)}
                            updateSelectedPrices={(value) => updateSelectedPrices(value)}
                        />
                    </div>
                    <div className="col-md-9">
                        <Products products={(!Object.keys(selectedCategories).length) && !selectedPrice.length ?
                            props.products : productsList
                        } />
                    </div>
                </div>
            </div>
        </>
    )
}

function mapStateToProps(state) {
    return {
        products: state.products.products
    }
}

export default connect(mapStateToProps)(ProductsWrapper)

