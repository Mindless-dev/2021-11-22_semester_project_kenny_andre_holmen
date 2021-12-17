import { baseUrl } from "./settings/api.js";
import { createNav } from "./components/nav/menu.js";
import { getIndividualProduct } from "./utils/apicall.js";
const backButton = document.querySelector("#previousPage");

createNav();

getIndividualProduct(baseUrl, ".individualProductContainer");

backButton.onclick = () => window.history.go(-1);
