function loadContact() {
  const content = document.getElementById("content");

  const headline = document.createElement("h1");
  headline.textContent = "Contact Us";

  const phone = document.createElement("p");
  phone.textContent = "Phone: 555-0198";

  const email = document.createElement("p");
  email.textContent = "Email: fake-restaurant@theodinproject.com";

  content.appendChild(headline);
  content.appendChild(phone);
  content.appendChild(email);
}

export default loadContact;
