namespace Icedealer {
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

  export function drawContainer(selectedOption: string): void {
    console.log("draw container");

    // Clear the canvas
    crc1.clearRect(0, 0, crc1.canvas.width, crc1.canvas.height);

    if (selectedOption === "Waffel") {
      //Waffle
      crc1.save();
      crc1.fillStyle = "hsl(41, 100%, 71%)";

      crc1.beginPath();
      crc1.moveTo(50, 100);
      crc1.lineTo(150, 100); //  right
      crc1.lineTo(100, 180); // top
      crc1.closePath();
      crc1.fill();
      crc1.restore();
    } else if (selectedOption === "Becher") {
      //Becher
      crc1.save();
      crc1.fillStyle = "hsl(38, 100%, 50%)";

      crc1.fillRect(50, 100, 100, 80);
      crc1.restore();
    }
  }
  export function drawBall(selectedOption: string): void {
    console.log("draw balls");
    let numberOfBalls = Icedealer.numberOfBalls;
    // Custom flavor
    let flavorSelect = document.getElementById("flavor") as HTMLSelectElement;
    let selectedFlavor = flavorSelect.value;
    let color = getFlavorColor(selectedFlavor);

    if (numberOfBalls >= 1) {
      // Ice cream ball 1
      crc1.fillStyle = color;
      crc1.beginPath();
      crc1.arc(75, 100, 24, 0, 2 * Math.PI);
      crc1.fill();
      crc1.closePath();
    }
    if (numberOfBalls >= 2) {
      // Ice cream ball 2
      crc1.fillStyle = color;
      crc1.beginPath();
      crc1.arc(124, 100, 24, 0, 2 * Math.PI);
      crc1.fill();
      console.log("zwei");
      crc1.closePath();
    }
    if (numberOfBalls >= 3) {
      // Ice cream ball 3
      crc1.fillStyle = color;
      crc1.beginPath();
      crc1.arc(100, 70, 24, 0, 2 * Math.PI);
      crc1.fill();
      crc1.closePath();
    }
  }


function getFlavorColor(flavor: string): string {
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
}