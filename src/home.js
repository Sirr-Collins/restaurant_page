// 1. Import the actual image file
import RestaurantImage from "./restaurant.jpg";

function loadHome() {
  const content = document.getElementById("content");

  const headline = document.createElement("h1");
  headline.textContent = "Welcome to The Odin Restaurant";

  // 2. Create an image element
  const image = document.createElement("img");
  // 3. Set the source to the imported file
  image.src = RestaurantImage;
  // 4. Add the CSS class we defined in style.css
  image.classList.add("hero-image");

  const copy = document.createElement("p");
  copy.textContent = "The best simulated food on the internet. Served fresh via JavaScript!";

  // 5. Append everything to the canvas
  content.appendChild(headline);
  content.appendChild(image);
  content.appendChild(copy);
}

export default loadHome;

