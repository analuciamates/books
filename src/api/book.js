import axios from 'axios'

const baseUrl = 'https://henri-potier.techx.fr'

// récupère tous les livres
export const getBooks = () => {
    return axios.get(baseUrl + '/books').then((response) => {
        return response.data
    })
}

// récupère les livres par isbn
export const getBooksbyIsbn = (isbn) => {
    return axios
        .get(baseUrl + '/books/' + isbn + '/commercialOffers')
        .then((response) => {
            return response.data
        })
}
