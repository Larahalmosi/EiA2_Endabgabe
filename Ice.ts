namespace Icedealer {
  export class IceCreamCreation {
    //data: Eis[] = [];
    // Eigenschaften der Eisbecher-Kreationen
    names: string[];
    container: string[];
    flavors: string[];
    numberOfBalls: number;
    sauces: string[];
    toppings: string[];
    prizes: number;

    constructor(
   // super();
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
    }
     draw():void{
        console.log("draw waffle");
        crc1.fillStyle = 'lightbrown';
    crc1.fillRect(50, 50, 200, 100);

    }
  }
}
