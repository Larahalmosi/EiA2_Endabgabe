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
  create();

  function handleLoad(_event: Event): void {
    crc1 = (document.getElementById("ice") as HTMLCanvasElement).getContext("2d")!;
    crc2 = (document.getElementById("sim") as HTMLCanvasElement).getContext("2d")!;

    console.log(crc1);
    console.log(crc2);

    let createButton = <HTMLButtonElement> document.getElementById("create");
    createButton.addEventListener("click", handleCreate);
   /*  let deleteButton = <HTMLButtonElement> document.getElementById("delete");
    deleteButton.addEventListener("click", handleDelete);
    console.log(handleDelete)
    let editButton = <HTMLButtonElement> document.getElementById("edit");
    editButton.addEventListener("click", handleDelete);
    console.log(handleCreate) */

    drawStaticObjects();
    background = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
    crc2.putImageData(background, 0, 0);

    window.requestAnimationFrame(update);
    window.setInterval(update, 20);
  }
  

  function drawStaticObjects(): void {
    backgroundcanvas();
    let tablePosition: Vector = new Vector(150, 500);
    drawTable(tablePosition);
    let tablePosition2: Vector = new Vector(450, 500);
    drawTable(tablePosition2);
    let tablePosition3: Vector = new Vector(750, 500);
    drawTable(tablePosition3);
//table 1
    let chair1Position: Vector = new Vector(60, 510);
    drawChair(chair1Position);
    let chair2Position: Vector = new Vector(150, 410);
    drawChair(chair2Position);
    let chair3Position: Vector = new Vector(230, 410);
    drawChair(chair3Position);
    let chair4Position: Vector = new Vector(310, 510);
    drawChair(chair4Position);
    //table 2
    let chair5Position: Vector = new Vector(370, 510);
    drawChair(chair5Position);
    let chair6Position: Vector = new Vector(450, 410);
    drawChair(chair6Position);
    let chair7Position: Vector = new Vector(530, 410);
    drawChair(chair7Position);
    let chair8Position: Vector = new Vector(600, 510);
    drawChair(chair8Position);
    //table 2
    let chair9Position: Vector = new Vector(660, 510);
    drawChair(chair9Position);
    let chair10Position: Vector = new Vector(750, 410);
    drawChair(chair10Position);
    let chair11Position: Vector = new Vector(830, 410);
    drawChair(chair11Position);
    let chair12Position: Vector = new Vector(900, 510);
    drawChair(chair12Position);


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
        crc2.fillStyle = "hsla(0, 54%, 41%, 1)";
        crc2.fillRect(x, y, tileWidth, tileHeight);

        crc2.fillStyle = "hsla(0, 0%, 0%, 0.1)";
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

  function drawTable(_position:Vector): void {
    crc2.save();
    crc2.translate(_position.x, _position.y);
    crc2.fillStyle ="hsl(23, 55%, 50%)";
    crc2.fillRect(0,0,130,90);
    crc2.strokeStyle = "hsl(23, 55%, 30%)";
    crc2.lineWidth = 4;
    crc2.strokeRect(0, 0, 130, 90);
    crc2.restore();
  }

  function drawChair(_position:Vector): void {
    crc2.save();
    crc2.translate(_position.x, _position.y);
    crc2.fillStyle ="hsl(23, 55%, 50%)"
    crc2.fillRect(0,0,55,55)
    crc2.restore();
  }
  function create(): void {
    for (let index: number = 0; index < 5; index++) {
      let customers: Customer = new Customer();
      moveables.push(customers);
    }}

  export function update(): void {
    crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
     crc2.putImageData(background, 0, 0); 
     

    for (let moveable of moveables) {
      moveable.move(1 / 60);
      moveable.draw();
    }
  }
}
