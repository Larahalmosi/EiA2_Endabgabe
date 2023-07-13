namespace Icedealer {
  export class IceCreamCreation {
    // Eigenschaften der Eisbecher-Kreationen
    names: string[];
    container: string[];
    flavors: string[];
    numberOfBalls: number;
    sauces: string[];
    toppings: string[];
    prizes: number;

    constructor(
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
  }
}
