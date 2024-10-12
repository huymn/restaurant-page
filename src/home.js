import restaurantBackground from "./assets/restaurant-background.jpg";

function createHomePage(contentDiv) {
  const restaurantBackgroundImg = document.createElement("img");
  const mainContainerDiv = document.createElement("div");
  const mainHeader = document.createElement("h1");
  const mainMessage = document.createElement("p");

  restaurantBackgroundImg.src = restaurantBackground;

  mainHeader.innerText = "Welcome to Huy's restaurant!";
  mainMessage.innerText =
    "This restaurant includes Huy's favorite food only. Check out the menu";

  mainContainerDiv.appendChild(mainHeader);
  mainContainerDiv.appendChild(mainMessage);
  contentDiv.appendChild(restaurantBackgroundImg);
  contentDiv.appendChild(mainContainerDiv);
}

export default createHomePage;
