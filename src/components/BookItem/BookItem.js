import React from 'react'
import { useDispatch } from 'react-redux'
import { addToBasket } from 'actions/basket/basketAction'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import './BookItem.scss'

const BookItem = ({ book }) => {
    const dispatch = useDispatch()

    const handleClick = (book) => {
        dispatch(addToBasket(book))
        toast('Le livre ' + book.title + ' a été ajouté au panier')
    }

    return (
        <li className="book__item">
            <img src={book.cover} className="book__item__img" />
            <p>{book.title}</p>
            <p>{book.price} &euro;</p>
            <i
                className="fa fa-plus-circle"
                onClick={() => {
                    handleClick(book)
                }}
            />
        </li>
    )
}

export default BookItem
