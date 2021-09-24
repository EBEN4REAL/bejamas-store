import React from 'react'
import './Header.css'

/*** Images Imports ***/
import Logo from "../../assets/img/logo.png"
import Cart from "../../assets/img/cart.png"



const Header = () => {
    return (
        <header className="header app-width d-flex justify-content-between align-items-center">
            <div className="logo-container">
                <img src={Logo} />
            </div>
            <div className="cart">
                <img src={Cart} />
            </div>
        </header>
    )
}
export default Header