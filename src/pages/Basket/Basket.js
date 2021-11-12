import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBooksbyIsbn } from 'api/book'
import getBestPromotion from 'utils/getBestPromotion'
import { deleteFromBasket, addToBasket } from 'actions/basket/basketAction'

import './Basket.scss'

const Basket = () => {
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.basket)

    const [priceBefore, setPriceBefore] = useState(0)
    const [price, setPrice] = useState(0)

    const deleteBook = (book) => {
        dispatch(deleteFromBasket(book))
    }

    const onClickAddToCart = (book) => {
        dispatch(addToBasket(book))
    }

    useEffect(() => {
        const isbnList = cart.basket.map((book) => book.isbn)

        if (isbnList.length === 0) {
            return
        }

        //récupère le prix total avant la promotion
        const totalBasket = cart.basket.reduce(function (total, book) {
            return total + book.quantity * book.price
        }, 0)

        setPriceBefore(totalBasket)

        //recupère la meilleure offre
        getBooksbyIsbn(isbnList).then((res) => {
            const bestOffer = getBestPromotion(totalBasket, res.offers)
            setPrice(bestOffer)
        })
    }, [cart.basket])

    return (
        <div>
            {cart.basket.length > 0 ? (
                <div>
                    <ul className="cart__list">
                        <p>Récapitulatif du panier : </p>
                        {cart.basket.map((book, id) => {
                            // on affiche le contenu du panier
                            return (
                                <li key={id} className="cart__list__item">
                                    <img
                                        src={book.cover}
                                        className="cart__list__img"
                                    />
                                    <p>{book.title}</p>
                                    <p>Quantité : {book.quantity}</p>
                                    <p>{book.price * book.quantity} &euro;</p>
                                    <i
                                        className="fa fa-minus-circle"
                                        onClick={() => {
                                            deleteBook(book)
                                        }}
                                    />
                                    <i
                                        className="fa fa-plus-circle"
                                        onClick={() => {
                                            onClickAddToCart(book)
                                        }}
                                    />
                                </li>
                            )
                        })}
                    </ul>
                    <h3 className="cart__list__total">
                        Total avant promo : {priceBefore} &euro;
                    </h3>
                    <h3 className="cart__list__total">
                        Total à payer après calcul des avantages : {price}{' '}
                        &euro;
                    </h3>
                </div>
            ) : (
                <h3 className="cart__list__empty">Le panier panier est vide</h3>
            )}
        </div>
    )
}

export default Basket
