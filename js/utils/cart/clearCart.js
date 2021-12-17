import { removeFromStorage, getfromstorage } from "../localstorage.js";
import { populateCartList } from "../../components/cart/populateCart.js";
const clearCartBtn = document.querySelector(".removeAllItems");
export function clearCartFunctionality() {
  clearCartBtn.addEventListener("click", clearCart);
  const itemsInCart = getfromstorage("products");
  if (itemsInCart.length === 0) {
    clearCartBtn.style.display = "none";
  }
}

function clearCart() {
  const deleteConfirmed = confirm("are you sure you want to clear the shopping cart");

  if (deleteConfirmed) {
    removeFromStorage("products");
    clearCartBtn.style.display = "none";
    populateCartList();
  }
}
