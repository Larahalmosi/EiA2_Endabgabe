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
    let moveables = [];
    console.log(moveables);
    // create();
    function handleLoad(_event) {
        Icedealer.crc1 = document.getElementById("ice").getContext("2d");
        Icedealer.crc2 = document.getElementById("sim").getContext("2d");
        console.log(Icedealer.crc1);
        console.log(Icedealer.crc2);
        handleCreate();
        console.log(handleCreate);
        let createButton = document.getElementById("create");
        createButton.addEventListener("click", handleCreate);
        drawStaticObjects();
        background = Icedealer.crc2.getImageData(0, 0, Icedealer.crc2.canvas.width, Icedealer.crc2.canvas.height);
        Icedealer.crc2.putImageData(background, 0, 0);
        window.requestAnimationFrame(update);
        window.setInterval(update, 20);
    }
    function handleCreate() {
        console.log("create");
        // Get input values
        let nameInput = document.getElementById("name");
        let containerSelect = document.getElementById("container");
        let flavorSelect = document.getElementById("flavor");
        let numberOfBallsInput = document.getElementById("numberOfBalls");
        let saucesSelect = document.getElementById("sauces");
        let toppingsSelect = document.getElementById("toppings");
        let prizeInput = document.getElementById("prize");
        // Create new menu element
        let newMenuElement = document.createElement("div");
        newMenuElement.id = "menuelement";
        let nameHeading = document.createElement("h3");
        nameHeading.textContent = nameInput.value;
        newMenuElement.appendChild(nameHeading);
        let priceParagraph = document.createElement("p");
        priceParagraph.id = "price";
        priceParagraph.textContent = prizeInput.value + "€";
        newMenuElement.appendChild(priceParagraph);
        /*  let detailsParagraph = document.createElement("p");
        detailsParagraph.innerHTML =
          containerSelect.value +
          flavorSelect.value +
          numberOfBallsInput.value +
          saucesSelect.value +
          toppingsSelect.value;
        newMenuElement.appendChild(detailsParagraph);  */
        // Append the new menu element to the menu
        let menu = document.getElementById("menu");
        menu.appendChild(newMenuElement);
        // Reset input values
        /*  nameInput.value = "";
         containerSelect.selectedIndex = 0;
         flavorSelect.selectedIndex = 0;
         numberOfBallsInput.value = "";
         saucesSelect.selectedIndex = 0;
         toppingsSelect.selectedIndex = 0;
         prizeInput.value = ""; */
        let editbutton = document.createElement("button");
        editbutton.textContent = 'EDIT',
            menu.appendChild(editbutton);
        let deletebutton = document.createElement("button");
        deletebutton.textContent = 'DELETE',
            menu.appendChild(deletebutton);
    }
    function drawStaticObjects() {
        backgroundcanvas();
        drawTable();
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
                Icedealer.crc2.fillStyle = "hsla(0, 74%, 71%, 1)";
                Icedealer.crc2.fillRect(x, y, tileWidth, tileHeight);
                Icedealer.crc2.fillStyle = "hsla(0, 0%, 0%, 0.2)";
                Icedealer.crc2.fillRect(x + offsetX, y + offsetY, tileWidth, tileHeight);
                Icedealer.crc2.restore();
            }
        }
        //background crc1
        Icedealer.crc1.save();
        Icedealer.crc1.fillStyle = "hsla(55, 94%, 86%, 1)";
        Icedealer.crc1.fillRect(0, 0, Icedealer.crc1.canvas.width, Icedealer.crc1.canvas.height);
        Icedealer.crc1.restore();
    }
    function drawTable() {
        Icedealer.crc2.save();
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