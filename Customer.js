"use strict";
var Icedealer;
(function (Icedealer) {
    class Customer extends Icedealer.Moveable {
        position;
        velosity;
        activity;
        constructor() {
            //console.log("Customer constructor");
            super();
            this.position = new Icedealer.Vector(0, 0);
            this.velosity = new Icedealer.Vector(0, 0);
            this.velosity.random(100, 200);
            // this.activity = "walk";
        }
        move(_timeslice) {
            //console.log("Customer move");
            let offset = new Icedealer.Vector(this.velosity.x, this.velosity.y);
            offset.scale(_timeslice * 0.2);
            this.position.add(offset);
            // Begrenzung auf y-Maximum
            if (this.position.y < 100) {
                this.position.y = 100;
            }
            else if (this.position.y > 200) {
                this.position.y = 200;
            }
            // Begrenzung auf Canvas-Breite
            if (this.position.x < 0) {
                this.position.x = 0;
                this.velosity.x *= -1;
            }
            else if (this.position.x > 820) {
                this.position.x = 820;
                this.velosity.x *= -1;
            }
            if (this.position.x >= 450 && this.position.x <= 550) {
                this.position.y += Math.random() * 10;
            }
        }
        draw() {
            let timer = 0;
            //console.log("happy smiley draw");
            // Head
            Icedealer.crc2.beginPath();
            Icedealer.crc2.arc(this.position.x, this.position.y, 25, 0, Math.PI * 2);
            Icedealer.crc2.fillStyle = "yellow";
            Icedealer.crc2.fill();
            Icedealer.crc2.closePath();
            // Eyes
            Icedealer.crc2.beginPath();
            Icedealer.crc2.arc(this.position.x - 10, this.position.y - 10, 5, 0, Math.PI * 2);
            Icedealer.crc2.fillStyle = "black";
            Icedealer.crc2.fill();
            Icedealer.crc2.closePath();
            Icedealer.crc2.beginPath();
            Icedealer.crc2.arc(this.position.x + 10, this.position.y - 10, 5, 0, Math.PI * 2);
            Icedealer.crc2.fillStyle = "black";
            Icedealer.crc2.fill();
            Icedealer.crc2.closePath();
            if (timer >= 1 && timer < 3) {
                // Draw neutral mouth
                Icedealer.crc2.beginPath();
                Icedealer.crc2.moveTo(this.position.x - 10, this.position.y + 5);
                Icedealer.crc2.lineTo(this.position.x + 10, this.position.y + 5);
                Icedealer.crc2.lineWidth = 2;
                Icedealer.crc2.strokeStyle = "black";
                Icedealer.crc2.stroke();
                Icedealer.crc2.closePath();
            }
            else if (timer >= 3) {
                // Draw sad mouth
                Icedealer.crc2.beginPath();
                Icedealer.crc2.arc(this.position.x, this.position.y + 10, 10, Math.PI, 0);
                Icedealer.crc2.lineWidth = 2;
                Icedealer.crc2.strokeStyle = "black";
                Icedealer.crc2.stroke();
                Icedealer.crc2.closePath();
            }
            else {
                // Draw happy mouth
                Icedealer.crc2.beginPath();
                Icedealer.crc2.arc(this.position.x, this.position.y + 4, 10, 0, Math.PI, false);
                Icedealer.crc2.lineWidth = 2;
                Icedealer.crc2.strokeStyle = "black";
                Icedealer.crc2.stroke();
                Icedealer.crc2.closePath();
            }
        }
    }
    Icedealer.Customer = Customer;
})(Icedealer || (Icedealer = {}));
//# sourceMappingURL=Customer.js.map