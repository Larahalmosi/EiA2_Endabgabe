"use strict";
var Icedealer;
(function (Icedealer) {
    class Customer extends Icedealer.Moveable {
        position;
        velosity;
        activity;
        constructor() {
            // console.log("Paraglider constructor");
            super();
            this.position = new Icedealer.Vector(0, 0);
            this.velosity = new Icedealer.Vector(0, 0);
            //this.velosity.random(100, 200);
            this.activity = "walk";
        }
        move(_timeslice) {
            // console.log("Paraglider move");
            // fly
            if (this.activity == "fly") {
                let offset = new Icedealer.Vector(this.velosity.x, this.velosity.y);
                offset.scale(_timeslice);
                this.position.add(offset);
                if (this.position.y > 120, this.position.x > 320) {
                    this.activity = "walk";
                    this.velosity.set(-50, 0);
                }
            }
        }
        draw() {
            //console.log("happy smiley draw");
            Icedealer.crc2.save();
            Icedealer.crc2.translate(this.position.x, this.position.y);
            if (this.activity == "fly") {
                // Draw the face
                Icedealer.crc2.beginPath();
                Icedealer.crc2.arc(200, 200, 150, 0, Math.PI * 2, false);
                Icedealer.crc2.fillStyle = 'yellow';
                Icedealer.crc2.fill();
                Icedealer.crc2.lineWidth = 5;
                Icedealer.crc2.strokeStyle = 'black';
                Icedealer.crc2.stroke();
                // Draw the eyes
                Icedealer.crc2.beginPath();
                Icedealer.crc2.arc(140, 150, 30, 0, Math.PI * 2, false);
                Icedealer.crc2.fillStyle = 'black';
                Icedealer.crc2.fill();
                Icedealer.crc2.beginPath();
                Icedealer.crc2.arc(260, 150, 30, 0, Math.PI * 2, false);
                Icedealer.crc2.fillStyle = 'black';
                Icedealer.crc2.fill();
                // Draw the mouth
                Icedealer.crc2.beginPath();
                Icedealer.crc2.arc(200, 250, 80, 0, Math.PI, false);
                Icedealer.crc2.lineWidth = 10;
                Icedealer.crc2.strokeStyle = 'black';
                Icedealer.crc2.stroke();
            }
        }
    }
    Icedealer.Customer = Customer;
})(Icedealer || (Icedealer = {}));
//# sourceMappingURL=Customer.js.map