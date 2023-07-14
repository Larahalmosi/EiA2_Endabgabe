"use strict";
var Icedealer;
(function (Icedealer) {
    async function handleCreate() {
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
        let detailsParagraph = document.createElement("p");
        detailsParagraph.innerHTML =
            containerSelect.value + 'br' +
                flavorSelect.value +
                numberOfBallsInput.value +
                saucesSelect.value +
                toppingsSelect.value;
        newMenuElement.appendChild(detailsParagraph);
        // Append the new menu element to the menu
        let menu = document.getElementById("menu");
        menu.appendChild(newMenuElement);
        // Reset input values
        nameInput.value = "";
        containerSelect.selectedIndex = 0;
        flavorSelect.selectedIndex = 0;
        numberOfBallsInput.value = "";
        saucesSelect.selectedIndex = 0;
        toppingsSelect.selectedIndex = 0;
        prizeInput.value = "";
        let editbutton = document.createElement("button");
        editbutton.id = 'edit';
        editbutton.textContent = 'EDIT';
        menu.appendChild(editbutton);
        let deletebutton = document.createElement("button");
        editbutton.id = 'delete';
        deletebutton.textContent = 'DELETE';
        menu.appendChild(deletebutton);
    }
    Icedealer.handleCreate = handleCreate;
    function handleDelete() {
        console.log("delete me");
    }
    Icedealer.handleDelete = handleDelete;
    function handleEdit() {
        console.log("edit me");
    }
    Icedealer.handleEdit = handleEdit;
})(Icedealer || (Icedealer = {}));
//# sourceMappingURL=Menu.js.map