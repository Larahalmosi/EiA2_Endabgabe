/*
Aufgabe: <Endabgabe>
Name: <Lara Sophia Elisabeth Halmosi>
Matrikel: <271343>
Datum: <31.05.2023>
Quellen: <stackoverflow.com,chat GPT, mozilla.org>
*/
// Handle-load function
namespace Icedealer {
  window.addEventListener("load", handleLoad);
  export let crc1: CanvasRenderingContext2D;
  export let crc2: CanvasRenderingContext2D;
  let background: ImageData;

  let moveables: Moveable[] = [];
  console.log(moveables);
  // create();

  function handleLoad(_event: Event): void {
    crc1 = (document.getElementById("ice") as HTMLCanvasElement).getContext("2d")!;
    crc2 = (document.getElementById("sim") as HTMLCanvasElement).getContext(
      "2d"
    )!;

    console.log(crc1);
    console.log(crc2);

    handleCreate();
    console.log(handleCreate);
    let createButton = <HTMLButtonElement> document.getElementById("create");
    createButton.addEventListener("click", handleCreate);

    drawStaticObjects();
    background = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
    crc2.putImageData(background, 0, 0);

    window.requestAnimationFrame(update);
    window.setInterval(update, 20);
  }
  function handleCreate(): void {
    console.log("create");
 // Get input values
 let nameInput = document.getElementById("name") as HTMLInputElement;
 let containerSelect = document.getElementById("container") as HTMLSelectElement;
 let flavorSelect = document.getElementById("flavor") as HTMLSelectElement;
 let numberOfBallsInput = document.getElementById("numberOfBalls") as HTMLInputElement;
 let saucesSelect = document.getElementById("sauces") as HTMLSelectElement;
 let toppingsSelect = document.getElementById("toppings") as HTMLSelectElement;
 let prizeInput = document.getElementById("prize") as HTMLInputElement;
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
  let menu = <HTMLDivElement> document.getElementById("menu");
  menu.appendChild(newMenuElement);

  // Reset input values
 /*  nameInput.value = "";
  containerSelect.selectedIndex = 0;
  flavorSelect.selectedIndex = 0;
  numberOfBallsInput.value = "";
  saucesSelect.selectedIndex = 0;
  toppingsSelect.selectedIndex = 0;
  prizeInput.value = ""; */
 
  let editbutton: HTMLButtonElement = <HTMLButtonElement>document.createElement("button");
  editbutton.textContent = 'EDIT',
  menu.appendChild(editbutton);

 let deletebutton: HTMLButtonElement = <HTMLButtonElement>document.createElement("button");  
 deletebutton.textContent = 'DELETE',
 menu.appendChild(deletebutton);
  }

  function drawStaticObjects(): void {
    backgroundcanvas();
    drawTable();
  }

  function backgroundcanvas() {
    let tileWidth = 50;
    let tileHeight = 50;
    let offsetX = 5;
    let offsetY = 5;

    crc2.save();
    //draw sea
    crc2.fillStyle = "hsla(199, 76%, 65%, 1)";
    crc2.fillRect(0, 0, crc2.canvas.width, 100);
    //draw beach
    crc2.fillStyle = "hsla(60, 100%, 71%, 1)";
    crc2.fillRect(0, 100, crc2.canvas.width, 250);
    //draw wall
    crc2.fillStyle = "hsla(15, 68%, 46%, 1)";
    crc2.fillRect(0, 230, 450, 250);

    crc2.fillStyle = "hsla(15, 68%, 46%, 1)";
    crc2.fillRect(550, 230, 800, 250);
    crc2.restore();

    // draw tiles
    for (let x = 0; x < crc2.canvas.width; x += tileWidth) {
      for (let y = 250; y < 850; y += tileHeight) {
        crc2.fillStyle = "hsla(0, 74%, 71%, 1)";
        crc2.fillRect(x, y, tileWidth, tileHeight);

        crc2.fillStyle = "hsla(0, 0%, 0%, 0.2)";
        crc2.fillRect(x + offsetX, y + offsetY, tileWidth, tileHeight);
        crc2.restore();
      }
    }
    //background crc1
    crc1.save();
    crc1.fillStyle = "hsla(55, 94%, 86%, 1)";
    crc1.fillRect(0, 0, crc1.canvas.width, crc1.canvas.height);
    crc1.restore();
  }

  function drawTable(): void {
    crc2.save();
  }

  export function update(): void {
    crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
     crc2.putImageData(background, 0, 0); 
     

    for (let moveable of moveables) {
      moveable.move(1 / 60);
      moveable.draw();
    }
  }
}
