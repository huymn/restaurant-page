import createHomePage from "./home";
import createMenuPage from "./menu";
import createAboutPage from "./about";
import "./styles.css";

const navButtons = document.querySelectorAll("button");
const contentDiv = document.querySelector("#content");

// Create the home page when the web first load
createHomePage(contentDiv);

// Add event listener to create page on which button is pressed
navButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const buttonId = e.target.id;

    // This is to clear out all current children nodes. Basically reseting the content div to be empty
    contentDiv.replaceChildren();

    if (buttonId === "menu") {
      createMenuPage(contentDiv);
    } else if (buttonId === "about") {
      createAboutPage(contentDiv);
    } else {
      createHomePage(contentDiv);
    }
  });
});
