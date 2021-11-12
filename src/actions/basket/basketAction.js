import { ADD_TO_BASKET, DELETE_FROM_BASKET } from './actions-types'

export const addToBasket = (book) => {
    return {
        type: ADD_TO_BASKET,
        payload: book,
    }
}

export const deleteFromBasket = (book) => {
    return {
        type: DELETE_FROM_BASKET,
        payload: book,
    }
}
