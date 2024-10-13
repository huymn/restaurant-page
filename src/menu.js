import BunBoHuePicture from "./assets/bun-bo-hue.jpg";
import BurgerPicture from "./assets/burger.jpg";
import PhoPicture from "./assets/pho.jpg";
import PorkchopPicture from "./assets/porkchop.jpg";
import SteakPicture from "./assets/steak.jpg";
import VNCoffeePicture from "./assets/vietnamese-coffee.jpg";

function createMenuPage(contentDiv) {
  // Create the header
  const header = document.createElement("h1");
  header.innerText = "Menu";

  // Menu items
  const BBHImg = document.createElement("img");
  BBHImg.src = BunBoHuePicture;

  const burgerImg = document.createElement("img");
  burgerImg.src = BurgerPicture;

  const phoImg = document.createElement("img");
  phoImg.src = PhoPicture;

  const porkchopImg = document.createElement("img");
  porkchopImg.src = PorkchopPicture;

  const steakImg = document.createElement("img");
  steakImg.src = SteakPicture;

  const VNCoffeeImg = document.createElement("img");
  VNCoffeeImg.src = VNCoffeePicture;

  // Array to
  const menuItems = [
    {
      name: "Bun Bo Hue",
      imgEl: BBHImg,
      description:
        "Vietnamese spicy beef noodle soup originated from central Vietnam city Hue.",
      price: "$10.99",
    },
    {
      name: "Burger",
      imgEl: burgerImg,
      description: "Just a burger, we all know what this is.",
      price: "$5.99",
    },
    {
      name: "Pho",
      imgEl: PhoPicture,
      description:
        "Vietnamese beef noodle soup. Simply the best thing there is.",
      price: "$10.99",
    },
    {
      name: "Porkchop",
      imgEl: porkchopImg,
      description: "Good ol' porkchop",
      price: "$10.99",
    },
    {
      name: "Steak",
      imgEl: steakImg,
      description: "Good ol'steak",
      price: "$10.99",
    },
    {
      name: "Vietnamese Coffee",
      imgEl: VNCoffeeImg,
      description: "Greatest coffee variation. Nothing comes close.",
      price: "$3.99",
    },
  ];

  const menuItemDivs = menuItems.map((item) => {
    const newItemDiv = document.createElement("div");
    newItemDiv.classList.add("menu-item");

    const itemName = document.createElement("p");
    itemName.classList.add("menu-item-name");
    itemName.innerText = item.name;

    const itemDescription = document.createElement("p");
    itemDescription.classList.add("menu-item-description");
    itemDescription.innerText = item.description;

    const itemPrice = document.createElement("p");
    itemPrice.classList.add("menu-item-price");
    itemPrice.innerText = item.price;

    newItemDiv.append(item.imgEl, itemName, itemDescription, itemPrice);
    return newItemDiv;
  });

  // Main container that will hold the grid of the menu items
  const menuItemsContainer = document.createElement("div");
  menuItemsContainer.classList.add("menu-items-container");
  menuItemsContainer.append(...menuItemDivs);

  contentDiv.append(header, menuItemsContainer);
}

export default createMenuPage;
