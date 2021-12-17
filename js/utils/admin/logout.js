import { removeFromStorage } from "../../utils/localstorage.js";

export function logOutFunctionality() {
  const logoutBtn = document.querySelector("#logout");

  logoutBtn.addEventListener("click", doLogOut);
}

function doLogOut() {
  removeFromStorage("token");
  removeFromStorage("user");
  location.href = "/index.html";
}
