function createAboutPage(contentDiv) {
  const header = document.createElement("h1");
  header.classList.add("about-header");
  header.innerText = "About";

  const aboutMessage = document.createElement("p");
  aboutMessage.classList.add("about-message");
  aboutMessage =
    "Just a restaurant that only serves the owner's favorite food.";

  contentDiv.append(header, aboutMessage);
}

export default createAboutPage;
