function loadMenu() {
  const content = document.getElementById("content");

  const headline = document.createElement("h1");
  headline.textContent = "Our Menu";

  const list = document.createElement("ul");
  const item1 = document.createElement("li");
  item1.textContent = "JavaScript Burger - Served with a side of DOM manipulation.";
  
  const item2 = document.createElement("li");
  item2.textContent = "CSS Grid Fries - Perfectly aligned and crispy.";

  list.appendChild(item1);
  list.appendChild(item2);

  content.appendChild(headline);
  content.appendChild(list);
}

export default loadMenu;

