namespace Icedealer{
    export class Customer extends Moveable {
        position: Vector;
        velosity: Vector;
        activity: string;
        constructor() {
            // console.log("Paraglider constructor");
            super();
            this.position = new Vector(0, 0);
            this.velosity = new Vector(0, 0);
            //this.velosity.random(100, 200);
            this.activity = "walk";
          }

move(_timeslice: number): void {
    // console.log("Paraglider move");
    // fly
    if (this.activity == "fly") {
      let offset: Vector = new Vector(this.velosity.x, this.velosity.y);
      offset.scale(_timeslice);
      this.position.add(offset);
      if (this.position.y > 120, this.position.x>320) {
        this.activity = "walk";
        this.velosity.set(-50, 0);
      }
    }
}
draw(): void {
    //console.log("happy smiley draw");
    crc2.save();
    crc2.translate(this.position.x, this.position.y);
    if (this.activity == "fly") {
         // Draw the face
    crc2.beginPath();
    crc2.arc(200, 200, 150, 0, Math.PI * 2, false);
    crc2.fillStyle = 'yellow';
    crc2.fill();
    crc2.lineWidth = 5;
    crc2.strokeStyle = 'black';
    crc2.stroke();

    // Draw the eyes
    crc2.beginPath();
    crc2.arc(140, 150, 30, 0, Math.PI * 2, false);
    crc2.fillStyle = 'black';
    crc2.fill();

    crc2.beginPath();
    crc2.arc(260, 150, 30, 0, Math.PI * 2, false);
    crc2.fillStyle = 'black';
    crc2.fill();

    // Draw the mouth
    crc2.beginPath();
    crc2.arc(200, 250, 80, 0, Math.PI, false);
    crc2.lineWidth = 10;
    crc2.strokeStyle = 'black';
    crc2.stroke();
}
}
}}