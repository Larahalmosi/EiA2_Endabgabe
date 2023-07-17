"use strict";
var Icedealer;
(function (Icedealer) {
    async function handleCreate(data) {
        //console.log("create");
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
        let detailsParagraph = document.createElement("p");
        detailsParagraph.innerHTML =
            containerSelect.value +
                "<br>" +
                flavorSelect.value +
                "<br>" +
                numberOfBallsInput.value +
                "<br>" +
                saucesSelect.value +
                "<br>" +
                toppingsSelect.value;
        console.log(handleCreate);
        newMenuElement.appendChild(detailsParagraph);
        // Append the new menu element to the menu
        let menu = document.getElementById("menu");
        menu.appendChild(newMenuElement);
        let query = JSON.stringify(detailsParagraph);
        await fetch("https://webuser.hs-furtwangen.de/~hauserth/Database/?command=insert&collection=Menulist&data={}" + query);
        // Create image element
        let imageElement = document.createElement("img");
        imageElement.src = getCanvasDataUrl();
        newMenuElement.appendChild(imageElement);
        console.log(imageElement);
        // Reset input values
        nameInput.value = "";
        containerSelect.selectedIndex = 0;
        flavorSelect.selectedIndex = 0;
        numberOfBallsInput.value = "";
        saucesSelect.selectedIndex = 0;
        toppingsSelect.selectedIndex = 0;
        prizeInput.value = "";
        let editbutton = (document.createElement("button"));
        editbutton.id = "edit";
        editbutton.textContent = "EDIT";
        editbutton.addEventListener("click", handleEdit);
        menu.appendChild(editbutton);
        let deletebutton = (document.createElement("button"));
        deletebutton.id = "delete";
        deletebutton.textContent = "DELETE";
        deletebutton.addEventListener("click", handleDelete);
        menu.appendChild(deletebutton);
    }
    Icedealer.handleCreate = handleCreate;
    function getCanvasDataUrl() {
        let canvas = document.getElementById("ice");
        return canvas.toDataURL();
    }
    async function handleDelete() {
        console.log("delete me");
    }
    Icedealer.handleDelete = handleDelete;
    async function handleEdit() {
        console.log("edit me");
    }
    Icedealer.handleEdit = handleEdit;
})(Icedealer || (Icedealer = {}));
//# sourceMappingURL=Menu.js.map