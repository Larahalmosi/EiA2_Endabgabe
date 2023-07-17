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
    function drawBall(selectedOption) {
        console.log("draw balls");
        let numberOfBalls = Icedealer.numberOfBalls;
        // Custom flavor
        let flavorSelect = document.getElementById("flavor");
        let selectedFlavor = flavorSelect.value;
        let color = getFlavorColor(selectedFlavor);
        if (numberOfBalls >= 1) {
            // Ice cream ball 1
            Icedealer.crc1.fillStyle = color;
            Icedealer.crc1.beginPath();
            Icedealer.crc1.arc(75, 100, 24, 0, 2 * Math.PI);
            Icedealer.crc1.fill();
            Icedealer.crc1.closePath();
        }
        if (numberOfBalls >= 2) {
            // Ice cream ball 2
            Icedealer.crc1.fillStyle = color;
            Icedealer.crc1.beginPath();
            Icedealer.crc1.arc(124, 100, 24, 0, 2 * Math.PI);
            Icedealer.crc1.fill();
            console.log("zwei");
            Icedealer.crc1.closePath();
        }
        if (numberOfBalls >= 3) {
            // Ice cream ball 3
            Icedealer.crc1.fillStyle = color;
            Icedealer.crc1.beginPath();
            Icedealer.crc1.arc(100, 70, 24, 0, 2 * Math.PI);
            Icedealer.crc1.fill();
            Icedealer.crc1.closePath();
        }
    }
    Icedealer.drawBall = drawBall;
    function getFlavorColor(flavor) {
        switch (flavor) {
            case "Andromeda":
                return "hsl(200, 100%, 50%)";
            case "Blutwurst":
                return "hsl(0, 80%, 40%)";
            case "Erdnuss":
                return "hsl(30, 70%, 50%)";
            case "Materie":
                return "hsl(240, 60%, 50%)";
            case "Luft":
                return "hsl(200, 20%, 80%)";
            default:
                return "hsl(0, 0%, 0%)";
        }
    }
})(Icedealer || (Icedealer = {}));
//# sourceMappingURL=Ice.js.map