namespace Icedealer {
  export interface Ice {
    title: string;
    comment: string;
    name: string;
    date: string;
    time: string;
    done: boolean;
}

export interface menuelement {
    [name: string]: Ice[];
}
  
  
    export async function handleCreate(data: Ice[]) {
      console.log("create");
      // Get input values
      let nameInput = document.getElementById("name") as HTMLInputElement;
      let containerSelect = document.getElementById(
        "container"
      ) as HTMLSelectElement;
      let flavorSelect = document.getElementById("flavor") as HTMLSelectElement;
      let numberOfBallsInput = document.getElementById(
        "numberOfBalls"
      ) as HTMLInputElement;
      let saucesSelect = document.getElementById("sauces") as HTMLSelectElement;
      let toppingsSelect = document.getElementById(
        "toppings"
      ) as HTMLSelectElement;
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
  
      let detailsParagraph = document.createElement("p") as HTMLElement;
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

      newMenuElement.appendChild(detailsParagraph);
      // Append the new menu element to the menu
      let menu = <HTMLDivElement>document.getElementById("menu");
      menu.appendChild(newMenuElement);
  
      // Reset input values
      nameInput.value = "";
      containerSelect.selectedIndex = 0;
      flavorSelect.selectedIndex = 0;
      numberOfBallsInput.value = "";
      saucesSelect.selectedIndex = 0;
      toppingsSelect.selectedIndex = 0;
      prizeInput.value = "";
  
      let editbutton: HTMLButtonElement = <HTMLButtonElement>(
        document.createElement("button")
      );
      editbutton.id = "edit";
      editbutton.textContent = "EDIT";
      editbutton.addEventListener("click", handleEdit);
  
      menu.appendChild(editbutton);
  
      let deletebutton: HTMLButtonElement = <HTMLButtonElement>(
        document.createElement("button")
      );
      deletebutton.id = "delete";
      deletebutton.textContent = "DELETE";
      deletebutton.addEventListener("click", handleDelete);
      menu.appendChild(deletebutton);
    }
  export async function handleDelete() {
    console.log("delete me");
    let deleteElement: HTMLElement = <HTMLElement>(
      document.getElementById("delete")
    );
    deleteElement.removeChild(newMenuElement);
  }
  export async function handleEdit() {
    console.log("edit me");
  }
}
