function createAboutPage(contentDiv) {
  const aboutMainContainer = document.createElement("div");
  aboutMainContainer.classList.add("about-main-container");

  const aboutContentContainer = document.createElement("div");
  aboutContentContainer.classList.add("about-content-container");

  const header = document.createElement("h1");
  header.classList.add("about-header");
  header.innerText = "About";

  const aboutMessage = document.createElement("p");
  aboutMessage.classList.add("about-message");
  aboutMessage.innerText =
    "Just a restaurant that only serves the owner's favorite food.";

  // Append all child to its' correct parent
  aboutContentContainer.append(aboutMessage);
  aboutMainContainer.append(header, aboutContentContainer);
  contentDiv.append(aboutMainContainer);
}

export default createAboutPage;
