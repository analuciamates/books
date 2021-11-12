import React from 'react'
import BookItem from '../BookItem'
import useBooks from 'hooks/useBooks'

import './Books.scss'

const Books = () => {
    const books = useBooks()

    return (
        <div>
            {books.length > 0 && (
                <ul className="book__list">
                    {books.map((book) => {
                        // on affiche la liste des livres
                        return <BookItem book={book} key={book.isbn} />
                    })}
                </ul>
            )}
        </div>
    )
}

export default Books
