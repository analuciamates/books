import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import './Header.scss'

const Header = () => {
    const cart = useSelector((state) => state.basket)

    const total = cart.basket.reduce(function (total, book) {
        return total + book.quantity
    }, 0)

    return (
        <div className="header">
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/basket">
                    <span className="header__cart">{total}</span>Panier
                </Link>
            </nav>
        </div>
    )
}

export default Header
