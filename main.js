"use strict";
/*
Aufgabe: <Endabgabe>
Name: <Lara Sophia Elisabeth Halmosi>
Matrikel: <271343>
Datum: <31.05.2023>
Quellen: <stackoverflow.com,chat GPT, mozilla.org>
*/
// Handle-load function
var Icedealer;
(function (Icedealer) {
    window.addEventListener("load", handleLoad);
    let background;
    let containerSelect;
    let numberOfBallsInput;
    Icedealer.numberOfBalls = 0;
    let moveables = [];
    //console.log(moveables);
    create();
    asynch;
    function handleLoad(_event) {
        Icedealer.crc1 = document.getElementById("ice").getContext("2d");
        Icedealer.crc2 = document.getElementById("sim").getContext("2d");
        //console.log(crc1);
        //console.log(crc2);
        let createButton = document.getElementById("create");
        createButton.addEventListener("click", Icedealer.handleCreate);
        let editButton = document.getElementById("edit");
        //editButton.addEventListener("click", handleEdit);
        let deleteButton = document.getElementById("delete");
        //deleteButton.addEventListener("click", handleDelete);
        //console.log(handleDelete)
        //onsole.log(handleCreate)
        containerSelect = document.getElementById("container");
        containerSelect.addEventListener("change", handleContainerSelect);
        numberOfBallsInput = document.getElementById("numberOfBalls");
        Icedealer.numberOfBalls = parseInt(numberOfBallsInput.value, 10);
        // Add event listener to update numberOfBalls when the input value changes
        numberOfBallsInput.addEventListener("input", handleNumberOfBallsInput);
        ;
        /*let response: Response = await fetch("https://webuser.hs-furtwangen.de/~halmosil/database/?command=create&collection=Menulist");
        let menu: string = await response.text();
        let data: menuelement = JSON.parse(menu);*/
        //handleContainerSelect(data);
        drawStaticObjects();
        background = Icedealer.crc2.getImageData(0, 0, Icedealer.crc2.canvas.width, Icedealer.crc2.canvas.height);
        Icedealer.crc2.putImageData(background, 0, 0);
        window.requestAnimationFrame(update);
        window.setInterval(update, 20);
    }
    function drawStaticObjects() {
        backgroundcanvas();
        let tablePosition = new Icedealer.Vector(150, 500);
        drawTable(tablePosition);
        let tablePosition2 = new Icedealer.Vector(450, 500);
        drawTable(tablePosition2);
        let tablePosition3 = new Icedealer.Vector(750, 500);
        drawTable(tablePosition3);
        //table 1
        let chair1Position = new Icedealer.Vector(60, 510);
        drawChair(chair1Position);
        let chair2Position = new Icedealer.Vector(150, 410);
        drawChair(chair2Position);
        let chair3Position = new Icedealer.Vector(230, 410);
        drawChair(chair3Position);
        let chair4Position = new Icedealer.Vector(310, 510);
        drawChair(chair4Position);
        //table 2
        let chair5Position = new Icedealer.Vector(370, 510);
        drawChair(chair5Position);
        let chair6Position = new Icedealer.Vector(450, 410);
        drawChair(chair6Position);
        let chair7Position = new Icedealer.Vector(530, 410);
        drawChair(chair7Position);
        let chair8Position = new Icedealer.Vector(600, 510);
        drawChair(chair8Position);
        //table 2
        let chair9Position = new Icedealer.Vector(660, 510);
        drawChair(chair9Position);
        let chair10Position = new Icedealer.Vector(750, 410);
        drawChair(chair10Position);
        let chair11Position = new Icedealer.Vector(830, 410);
        drawChair(chair11Position);
        let chair12Position = new Icedealer.Vector(900, 510);
        drawChair(chair12Position);
    }
    function backgroundcanvas() {
        let tileWidth = 50;
        let tileHeight = 50;
        let offsetX = 5;
        let offsetY = 5;
        Icedealer.crc2.save();
        //draw sea
        Icedealer.crc2.fillStyle = "hsla(199, 76%, 65%, 1)";
        Icedealer.crc2.fillRect(0, 0, Icedealer.crc2.canvas.width, 100);
        //draw beach
        Icedealer.crc2.fillStyle = "hsla(60, 100%, 71%, 1)";
        Icedealer.crc2.fillRect(0, 100, Icedealer.crc2.canvas.width, 250);
        //draw wall
        Icedealer.crc2.fillStyle = "hsla(15, 68%, 46%, 1)";
        Icedealer.crc2.fillRect(0, 230, 450, 250);
        Icedealer.crc2.fillStyle = "hsla(15, 68%, 46%, 1)";
        Icedealer.crc2.fillRect(550, 230, 800, 250);
        Icedealer.crc2.restore();
        // draw tiles
        for (let x = 0; x < Icedealer.crc2.canvas.width; x += tileWidth) {
            for (let y = 250; y < 850; y += tileHeight) {
                Icedealer.crc2.fillStyle = "hsla(0, 54%, 41%, 1)";
                Icedealer.crc2.fillRect(x, y, tileWidth, tileHeight);
                Icedealer.crc2.fillStyle = "hsla(0, 0%, 0%, 0.1)";
                Icedealer.crc2.fillRect(x + offsetX, y + offsetY, tileWidth, tileHeight);
                Icedealer.crc2.restore();
            }
        }
        //background crc1
        Icedealer.crc1.save();
        Icedealer.crc1.fillStyle = "hsl(0, 0%, 78%)";
        Icedealer.crc1.fillRect(0, 0, Icedealer.crc1.canvas.width, Icedealer.crc1.canvas.height);
        Icedealer.crc1.restore();
    }
    function drawTable(_position) {
        Icedealer.crc2.save();
        Icedealer.crc2.translate(_position.x, _position.y);
        Icedealer.crc2.fillStyle = "hsl(23, 55%, 50%)";
        Icedealer.crc2.fillRect(0, 0, 130, 90);
        Icedealer.crc2.strokeStyle = "hsl(23, 55%, 30%)";
        Icedealer.crc2.lineWidth = 4;
        Icedealer.crc2.strokeRect(0, 0, 130, 90);
        Icedealer.crc2.restore();
    }
    function drawChair(_position) {
        Icedealer.crc2.save();
        Icedealer.crc2.translate(_position.x, _position.y);
        Icedealer.crc2.fillStyle = "hsl(23, 55%, 50%)";
        Icedealer.crc2.fillRect(0, 0, 55, 55);
        Icedealer.crc2.restore();
    }
    function handleNumberOfBallsInput() {
        Icedealer.numberOfBalls = parseInt(numberOfBallsInput.value, 10);
        Icedealer.drawBall(containerSelect.value);
    }
    function handleContainerSelect() {
        let selectedOption = containerSelect.value;
        Icedealer.drawContainer(selectedOption);
        Icedealer.drawBall(selectedOption);
    }
    function create() {
        for (let index = 0; index < 5; index++) {
            let customers = new Icedealer.Customer();
            moveables.push(customers);
            console.log("new customer created");
        }
    }
    function update() {
        Icedealer.crc2.clearRect(0, 0, Icedealer.crc2.canvas.width, Icedealer.crc2.canvas.height);
        Icedealer.crc2.putImageData(background, 0, 0);
        for (let moveable of moveables) {
            moveable.move(1 / 60);
            moveable.draw();
        }
    }
    Icedealer.update = update;
})(Icedealer || (Icedealer = {}));
//# sourceMappingURL=main.js.map