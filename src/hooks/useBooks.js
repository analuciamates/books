import { useEffect } from 'react'
import { getBooks } from 'api/book'
import useLocalStorage from './useLocalStorage'

function useBooks() {
    const [books, setBooks] = useLocalStorage('books', [])

    useEffect(() => {
        if (books.length === 0) {
            // récupère tous les livres
            getBooks().then((res) => {
                console.log(res)
                setBooks(res)
            })
        }
    }, [books])

    return books
}

export default useBooks
