"use strict";
var Icedealer;
(function (Icedealer) {
    class IceCreamCreation {
        // Eigenschaften der Eisbecher-Kreationen
        names;
        container;
        flavors;
        numberOfBalls;
        sauces;
        toppings;
        prizes;
        constructor(names, container, flavors, numberOfBalls, sauces, toppings, prizes) {
            this.names = names;
            this.container = container;
            this.flavors = flavors;
            this.numberOfBalls = numberOfBalls;
            this.sauces = sauces;
            this.toppings = toppings;
            this.prizes = prizes;
        }
    }
    Icedealer.IceCreamCreation = IceCreamCreation;
})(Icedealer || (Icedealer = {}));
//# sourceMappingURL=Ice.js.map