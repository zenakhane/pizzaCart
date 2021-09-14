module.exports = function pizzaCart() {
    var largeTotal = 0
    var mediumTotal = 0
    var smallTotal = 0
    var pizzaTotal = 0
    var pizzaChoiceDisplay = []
    var largeCost = 87.99
    var mediumCost = 58.99
    var smallCost = 31.99

    function pizzaBuy(pizza) {
        if (pizza === 'large') {
            pizzaChoiceDisplay.push(pizza)
        } else if (pizza === 'medium') {
            pizzaChoiceDisplay.push(pizza)

        } else if (pizza === 'small') {
            pizzaChoiceDisplay.push(pizza)
         }
    }
// post route
    function pizzaTotals(pizzaTotalType) {
        if (pizzaTotalType === 'large') {
            largeTotal += 87.99
            pizzaTotal += 87.99

        } else if (pizzaTotalType === 'medium') {
            mediumTotal += 58.99
            pizzaTotal += 58.99

        } else if (pizzaTotalType === 'small') {
            smallTotal += 31.99
            pizzaTotal += 31.99
        }
    }
    // get route
    function getLargeTotal() {
        return largeTotal
    }
    function getMediumTotal() {
        return mediumTotal
    }
    function getSmallTotal() {
        return smallTotal
    }

    return {
        pizzaBuy,
        pizzaTotals,
        getLargeTotal,
        getMediumTotal,
        getSmallTotal
    }
}
