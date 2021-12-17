import { getfromstorage } from "../localStorage.js";

export function calculatePrice() {
  const priceContainer = document.querySelector(".totalPrice");
  const priceOfProducts = [];
  const productsInCart = getfromstorage("products");
  productsInCart.forEach((product) => priceOfProducts.push(product.price));

  if (priceOfProducts.length >= 1) {
    let totalPrice = 0;
    for (let i = 0; i < priceOfProducts.length; i++) {
      totalPrice = totalPrice += parseFloat(priceOfProducts[i]);
    }

    priceContainer.innerHTML = `<p>Total Price: ${totalPrice} kr</p>`;
  } else {
    priceContainer.innerHTML = "";
  }
}
