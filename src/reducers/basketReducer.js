import {
    ADD_TO_BASKET,
    DELETE_FROM_BASKET,
} from '../actions/basket/actions-types'

const initialState = {
    basket: [],
}

export default function BasketsReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_BASKET:
            //on vérifie si le livre existe déjà
            const index = state.basket.findIndex(
                (book) => book.isbn === action.payload.isbn
            )
            
            //s'il n'existe pas on l'ajoute
            if (index === -1) {
                return {
                    basket: [
                        ...state.basket,
                        { ...action.payload, quantity: 1 },
                    ],
                }
            }

            //s'il existe on augmente la quantité
            const newBasket = state.basket.map((book, i) =>
                index === i ? { ...book, quantity: book.quantity + 1 } : book
            )

            return {
                basket: newBasket,
            }
        case DELETE_FROM_BASKET:
            //on récupère le livre par son isbn
            const indexToDelete = state.basket.findIndex(
                (book) => book.isbn === action.payload.isbn
            )
            
            //si un seul, on l'enlève du panier
            if (state.basket[indexToDelete].quantity === 1) {
                return {
                    basket: state.basket.filter(
                        (book) => book.isbn !== action.payload.isbn
                    ),
                }
            }

            //sinon on supprime un de sa quantité
            const newBasket2 = state.basket.map((book, i) =>
                indexToDelete === i
                    ? { ...book, quantity: book.quantity - 1 }
                    : book
            )

            return {
                basket: newBasket2,
            }
        default:
            return state
    }
}
