// 1. Import all your workers
import "./style.css";
import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";

// 2. Write a helper function to wipe the canvas clean
function clearContent() {
  const content = document.getElementById("content");
  content.innerHTML = "";
}

// 3. Grab the buttons from your HTML
const homeBtn = document.getElementById("btn-home");
const menuBtn = document.getElementById("btn-menu");
const contactBtn = document.getElementById("btn-contact");

// 4. Attach event listeners to the buttons
homeBtn.addEventListener("click", () => {
  clearContent();
  loadHome();
});

menuBtn.addEventListener("click", () => {
  clearContent();
  loadMenu();
});

contactBtn.addEventListener("click", () => {
  clearContent();
  loadContact();
});

// 5. Load the homepage by default when the site first opens
loadHome();
