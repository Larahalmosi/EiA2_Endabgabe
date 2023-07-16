"use strict";
var Icedealer;
(function (Icedealer) {
    //export class IceCreamCreation {
    //data: Eis[] = [];
    // Eigenschaften der Eisbecher-Kreationen
    /*    names: string[];
      container: string[];
      flavors: string[];
      numberOfBalls: number;
      sauces: string[];
      toppings: string[];
      prizes: number;
  
      constructor(
     super();
        names: string[],
        container: string[],
        flavors: string[],
        numberOfBalls: number,
        sauces: string[],
        toppings: string[],
        prizes: number
      )
      {
        this.names = names;
        this.container = container;
        this.flavors = flavors;
        this.numberOfBalls = numberOfBalls;
        this.sauces = sauces;
        this.toppings = toppings;
        this.prizes = prizes;
      } */
    function drawContainer(selectedOption) {
        console.log("draw container");
        // Clear the canvas
        Icedealer.crc1.clearRect(0, 0, Icedealer.crc1.canvas.width, Icedealer.crc1.canvas.height);
        if (selectedOption === "Waffel") {
            //Waffle
            Icedealer.crc1.save();
            Icedealer.crc1.fillStyle = "hsl(41, 100%, 71%)";
            Icedealer.crc1.beginPath();
            Icedealer.crc1.moveTo(50, 100);
            Icedealer.crc1.lineTo(150, 100); //  right
            Icedealer.crc1.lineTo(100, 180); // top
            Icedealer.crc1.closePath();
            Icedealer.crc1.fill();
            Icedealer.crc1.restore();
        }
        else if (selectedOption === "Becher") {
            //Becher
            Icedealer.crc1.save();
            Icedealer.crc1.fillStyle = "hsl(38, 100%, 50%)";
            Icedealer.crc1.fillRect(50, 100, 100, 80);
            Icedealer.crc1.restore();
        }
    }
    Icedealer.drawContainer = drawContainer;
})(Icedealer || (Icedealer = {}));
//# sourceMappingURL=Ice.js.map