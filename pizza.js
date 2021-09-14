module.exports = function pizzaCart() {
    var largeTotal = 0
    var mediumTotal = 0
    var smallTotal = 0
    var pizzaTotal = 0
    // var pizzaChoiceDisplay = []


    // function pizzaBuy(small,medium,large) {
    //     if (pizza === 'small') {
    //         pizzaChoiceDisplay.push(pizza)
    //     } else if (pizza === 'medium') {
    //         pizzaChoiceDisplay.push(pizza)

    //     } else if (pizza === 'large') {
    //         pizzaChoiceDisplay.push(pizza)
    //      }
    // }

    function pizzaLarge(pizzaTotalType) {
        if (pizzaTotalType === 'large') {
            largeTotal += 87.99
            pizzaTotal += 87.99

        }
    }

    function pizzaMedium(pizzaTotalType) {
        if (pizzaTotalType === 'medium') {
            mediumTotal += 58.99
            pizzaTotal += 58.99

        }
    }
    function pizzaSmall() {
        if (pizzaTotalType === 'small') {
            smallTotal += 31.99
            pizzaTotal += 31.99
        }
    }


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
        
        pizzaLarge,
        pizzaMedium,
        pizzaSmall,
        getLargeTotal,
        getMediumTotal,
        getSmallTotal
    }
}
