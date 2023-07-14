namespace Icedealer{
   export async function handleCreate() {
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
    
    let priceParagraph = document.createElement("p") 
    priceParagraph.id = "price";
    priceParagraph.textContent = prizeInput.value + "€";
    newMenuElement.appendChild(priceParagraph);
    
      let detailsParagraph = document.createElement("p") as HTMLElement;
     detailsParagraph.innerHTML =
       containerSelect.value + 'br'+
       flavorSelect.value +
       numberOfBallsInput.value +
       saucesSelect.value +
       toppingsSelect.value;
     newMenuElement.appendChild(detailsParagraph);   
      // Append the new menu element to the menu
      let menu = <HTMLDivElement> document.getElementById("menu");
      menu.appendChild(newMenuElement);
    
      // Reset input values
     nameInput.value = "";
      containerSelect.selectedIndex = 0;
      flavorSelect.selectedIndex = 0;
      numberOfBallsInput.value = "";
      saucesSelect.selectedIndex = 0;
      toppingsSelect.selectedIndex = 0;
      prizeInput.value = "";
   
      let editbutton: HTMLButtonElement = <HTMLButtonElement>document.createElement("button");
      editbutton.id= 'edit';
      editbutton.textContent = 'EDIT';
      menu.appendChild(editbutton);
    
     let deletebutton: HTMLButtonElement = <HTMLButtonElement>document.createElement("button");  
     editbutton.id=  'delete';
     deletebutton.textContent = 'DELETE';
     menu.appendChild(deletebutton); 
      }
export function handleDelete(){
console.log("delete me")
}
export function handleEdit(){
    console.log("edit me")

}


}