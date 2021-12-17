import { getfromstorage } from "../../utils/localstorage.js";
import { mobilenavToggle } from "../../utils/mobilemenu.js";

const user = getfromstorage("user");

export function createNav() {
  const header = document.querySelector("header");
  const { pathname } = document.location;
  header.innerHTML = `
  <div class="navContainer">
  <a href="index.html" class="logo">Shoeyverse</a>
  <button class="iconButton nav-toggle"><i class="fas fa-bars"></i></button>
  <nav class="hidden">
    <ul>
        <li><a class="${pathname === "/index.html" ? "active" : ""}" href="index.html">Home<a/></li>
        <li><a class="${pathname === "/products.html" ? "active" : ""}" href="products.html">Products<a/></li>
        <li>${
          user.length != 0
            ? `<a class="${pathname === "/admin.html" ? "active" : ""}" href="admin.html"> Admin<a/>`
            : `<a class="${pathname === "/login.html" ? "active" : ""}" href="login.html">Log in<a/>`
        }</li>
        <li><a class="${pathname === "/about.html" ? "active" : ""}" href="about.html">About Us<a/></li>
        <li><a class="${pathname === "/cart.html" ? "activeCart" : ""}"href="cart.html"><i class="fas fa-shopping-cart"></i><a/></li>
    </ul>
  </div>
   `;

  const hamburgermenu = document.querySelector(".nav-toggle");
  hamburgermenu.addEventListener("click", mobilenavToggle);
}
