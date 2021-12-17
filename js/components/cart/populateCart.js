import { getfromstorage } from "../../utils/localStorage.js";
import { removeFromCart } from "../../utils/cart/cartFunctionality.js";
import { calculatePrice } from "../../utils/cart/priceOfCartItems.js";

export function populateCartList() {
  const container = document.querySelector(".shoppingCartItems");
  const inShoppingCart = getfromstorage("products");
  container.innerHTML = ``;

  inShoppingCart.forEach((shoe) => {
    container.innerHTML += `
        <section class="productInCart">
        <a href="individualproduct.html?id=${shoe.id}"><img src="${shoe.imageUrl}" alt="${shoe.altext}"></img></a>
        <button id="removeFromCart" data-id="${shoe.id}"><i class="fas fa-times"></i></button>
        <div class="cartProductDescription">
        <h2>${shoe.title}</h2>
        <p class="price">Price: ${shoe.price}</p>
        <p>Size: 45</p>
        </div>
       
        </section>`;
  });

  const cartBtn = document.querySelectorAll("#removeFromCart");
  cartBtn.forEach((button) => button.addEventListener("click", removeFromCart));

  if (inShoppingCart.length === 0) {
    const clearCartBtn = document.querySelector(".removeAllItems");
    clearCartBtn.style.display = "none";
    container.innerHTML = `
        <h2 class="noItemsInCart">No Items in Shopping Cart</h2>`;
  }
  calculatePrice();
}
