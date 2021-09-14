let assert = require("assert");
let pizzaCart1 = require("../pizza");


describe('buy pizza', function() {
    it('Should be able to get pizza total ', function() {
        let pizzaCart = pizzaCart1();
        pizzaCart.pizzaTotals(87.99)
        assert.equal(87.99, pizzaCart.getLargeTotal())
        pizzaCart.pizzaTotals(87.99)
        assert.equal(87.99, pizzaCart.getLargeTotal())
    });
})