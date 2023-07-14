"use strict";
var Icedealer;
(function (Icedealer) {
    class Moveable {
        position;
        velosity;
        constructor(_position) {
            //console.log("Moveable constructor");
            if (_position)
                this.position = _position.copy();
            else
                this.position = new Icedealer.Vector(200, 0);
            //min, max lenght festlegen
            this.velosity = new Icedealer.Vector(0, 0);
        }
        move(_timeslice) {
            //console.log("Moveable move");
            //Verschiebung
            let offset = this.velosity.copy();
            //offset.x += wind;
            offset.scale(_timeslice);
            this.position.add(offset);
            // wenn position canvas verlässt
            if (this.position.x < 0)
                //addend
                this.position.x += Icedealer.crc2.canvas.width;
            if (this.position.y < 0)
                //addend
                this.position.y += Icedealer.crc2.canvas.height;
            if (this.position.x > Icedealer.crc2.canvas.width)
                //addend
                this.position.x -= Icedealer.crc2.canvas.width;
            if (this.position.y > Icedealer.crc2.canvas.height)
                //addend
                this.position.y -= Icedealer.crc2.canvas.height;
        }
        draw() {
            console.log("Moveable draw");
        }
    }
    Icedealer.Moveable = Moveable;
})(Icedealer || (Icedealer = {}));
//# sourceMappingURL=Moveable.js.map