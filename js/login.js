import { createNav } from "./components/nav/menu.js";
import { sendForm } from "./utils/login/loginvalues.js";

createNav();
const form = document.querySelector("form");
form.addEventListener("submit", sendForm);
