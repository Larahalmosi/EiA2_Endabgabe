"use strict";
var Icedealer;
(function (Icedealer) {
    class IceCreamCreation {
        //data: Eis[] = [];
        // Eigenschaften der Eisbecher-Kreationen
        names;
        container;
        flavors;
        numberOfBalls;
        sauces;
        toppings;
        prizes;
        constructor(
        // super();
        names, container, flavors, numberOfBalls, sauces, toppings, prizes) {
            this.names = names;
            this.container = container;
            this.flavors = flavors;
            this.numberOfBalls = numberOfBalls;
            this.sauces = sauces;
            this.toppings = toppings;
            this.prizes = prizes;
        }
        draw() {
            console.log("draw waffle");
            Icedealer.crc1.fillStyle = 'lightbrown';
            Icedealer.crc1.fillRect(50, 50, 200, 100);
        }
    }
    Icedealer.IceCreamCreation = IceCreamCreation;
})(Icedealer || (Icedealer = {}));
//# sourceMappingURL=Ice.js.map