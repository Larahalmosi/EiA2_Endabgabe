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

}
