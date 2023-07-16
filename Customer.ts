namespace Icedealer{
    export class Customer extends Moveable {
        position: Vector;
        velosity: Vector;
        activity: string;
        constructor() {
             //console.log("Customer constructor");
            super();
            this.position = new Vector(0, 0);
            this.velosity = new Vector(0, 0);
            this.velosity.random(100, 200);
           // this.activity = "walk";
      
          }
          

move(_timeslice: number): void {
    //console.log("Customer move");
    let offset: Vector = new Vector(this.velosity.x, this.velosity.y);
    offset.scale(_timeslice*0.2);
    this.position.add(offset);

    // Begrenzung auf y-Maximum
    if (this.position.y < 100) {
      this.position.y = 100;
    } else if (this.position.y > 200) {
      this.position.y = 200;
    }

    // Begrenzung auf Canvas-Breite
    if (this.position.x < 0) {
      this.position.x = 0;
      this.velosity.x *= -1;

    } else if (this.position.x > 820) {
      this.position.x = 820;
      this.velosity.x *= -1;
    }
    if (this.position.x >= 450 && this.position.x <= 550) {
        this.position.y +=  Math.random() *10;
      }
 }
 
draw(): void {
    let timer: number = 0;
    //console.log("happy smiley draw");

 // Head
 crc2.beginPath();
 crc2.arc(this.position.x, this.position.y, 25, 0, Math.PI * 2);
 crc2.fillStyle = "yellow";
 crc2.fill();
 crc2.closePath();
 // Eyes
crc2.beginPath();
crc2.arc(this.position.x - 10, this.position.y - 10, 5, 0, Math.PI * 2);
crc2.fillStyle = "black";
crc2.fill();
crc2.closePath();

crc2.beginPath();
crc2.arc(this.position.x + 10, this.position.y - 10, 5, 0, Math.PI * 2);
crc2.fillStyle = "black";
crc2.fill();
crc2.closePath();

if (timer >= 1 && timer < 3) {
    // Draw neutral mouth
    crc2.beginPath();
    crc2.moveTo(this.position.x - 10, this.position.y + 5);
    crc2.lineTo(this.position.x + 10, this.position.y + 5);
    crc2.lineWidth = 2;
    crc2.strokeStyle = "black";
    crc2.stroke();
    crc2.closePath();
  } else if (timer >= 3) {
    // Draw sad mouth
    crc2.beginPath();
    crc2.arc(this.position.x, this.position.y + 10, 10, Math.PI, 0);
    crc2.lineWidth = 2;
    crc2.strokeStyle = "black";
    crc2.stroke();
    crc2.closePath();
  } else {
    // Draw happy mouth
    crc2.beginPath();
    crc2.arc(this.position.x, this.position.y + 4, 10, 0, Math.PI, false);
    crc2.lineWidth = 2;
    crc2.strokeStyle = "black";
    crc2.stroke();
    crc2.closePath();
  }


}
}
}