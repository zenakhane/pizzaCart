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
    function pizzaSmall(pizzaTotalType) {
        if (pizzaTotalType === 'small') {
            smallTotal += 31.99
            pizzaTotal += 31.99
        }
    }

    function getLargeTotal() {
        return largeTotal.toFixed(2)
    }
    function getMediumTotal() {
        return mediumTotal.toFixed(2)
    }
    function getSmallTotal() {
        return smallTotal.toFixed(2)
    }
    function getTotalpizzas(){
        return pizzaTotal.toFixed(2)
    }

    function pizzaOrders(){
       let id= 0

return {
    'OrderId': id+1,
    'status' : "Payment due",
    'amount' : pizzaTotal
}
    }
    return {
        
        pizzaLarge,
        pizzaMedium,
        pizzaSmall,
        getLargeTotal,
        getMediumTotal,
        getSmallTotal,
        getTotalpizzas,
        pizzaOrders
    }
}
