function getBestPromotion(totalBasket, offers) {
    let priceOffers = []
    let percentagePrice = 0
    let minusPrice = 0
    let slicePrice = 0
    let diff = 0

    //calcule le prix final en prenant en compte les différentes offres
    for (const offer of offers) {
        switch (offer.type) {
            case 'percentage':
                percentagePrice =
                    totalBasket - (totalBasket * offer.value) / 100
                priceOffers.push(percentagePrice)
                break
            case 'minus':
                minusPrice = totalBasket - offer.value
                priceOffers.push(minusPrice)
                break
            case 'slice':
                diff = totalBasket / offer.sliceValue
                if (diff >= 1) {
                    slicePrice = totalBasket - offer.value * diff
                } else {
                    slicePrice = totalBasket
                }
                priceOffers.push(slicePrice)
                break
            default:
                priceOffers.push(totalBasket)
        }
    }

    return Math.min(...priceOffers)
}

export default getBestPromotion
