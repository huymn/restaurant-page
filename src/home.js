import restaurantBackground from "./assets/restaurant-background.jpg";

function createHomePage(contentDiv) {
  const mainContainerDiv = document.createElement("div");
  mainContainerDiv.classList.add("home-main-container");

  const messageContainer = document.createElement("div");
  messageContainer.classList.add("home-content-container");

  const mainHeader = document.createElement("h1");
  mainHeader.classList.add("home-header");

  const mainMessage = document.createElement("p");
  mainMessage.classList.add("home-message");

  mainHeader.innerText = "Welcome to Huy's restaurant!";
  mainMessage.innerText =
    "This restaurant includes Huy's favorite food only. Check out the menu";

  messageContainer.append(mainHeader, mainMessage);
  mainContainerDiv.append(messageContainer);
  contentDiv.append(mainContainerDiv);
}

export default createHomePage;
