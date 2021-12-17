import { modalHtml } from "../../components/modal/createModal.js";

export function createModal() {
  const openModalBtn = document.querySelectorAll("#modalBtn");
  openModalBtn.forEach((button) => button.addEventListener("click", modalHtml));
}
