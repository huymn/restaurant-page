import BunBoHuePicture from "./assets/bun-bo-hue.jpg";
import BurgerPicture from "./assets/burger.jpg";
import PhoPicture from "./assets/pho.jpg";
import PorkchopPicture from "./assets/porkchop.jpg";
import SteakPicture from "./assets/steak.jpg";
import VNCoffeePicture from "./assets/vietnamese-coffee.jpg";

function createMenuPage(contentDiv) {
  const menuMainContainer = document.createElement("div");
  menuMainContainer.classList.add("menu-main-container");

  // Create the header
  const header = document.createElement("h1");
  header.classList.add("menu-header");
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
      imgEl: phoImg,
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

    const imgContainer = document.createElement("div");
    imgContainer.classList.add("menu-img-container");
    imgContainer.append(item.imgEl);

    const itemInfoContainer = document.createElement("div");
    itemInfoContainer.classList.add("menu-item-info-container");

    itemInfoContainer.append(itemName, itemDescription, itemPrice);

    newItemDiv.append(imgContainer, itemInfoContainer);
    return newItemDiv;
  });

  // Main container that will hold the grid of the menu items
  const menuItemsContainer = document.createElement("div");
  menuItemsContainer.classList.add("menu-items-container");
  menuItemsContainer.append(...menuItemDivs);

  menuMainContainer.append(header, menuItemsContainer);

  contentDiv.append(menuMainContainer);
}

export default createMenuPage;
