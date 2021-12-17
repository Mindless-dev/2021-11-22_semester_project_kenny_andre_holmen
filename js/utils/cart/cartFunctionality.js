import { populateCartList } from "../../components/cart/populateCart.js";
import { getfromstorage, addToStorage } from "../localStorage.js";

export function removeFromCart() {
  const localStorageKey = "products";
  const id = this.dataset.id;

  const productsInCart = getfromstorage(localStorageKey);
  const productInCart = productsInCart.find((product) => product.id === id);
  const newProductsInCart = productsInCart.filter((product) => product.id !== id);
  if (productInCart) {
    addToStorage(localStorageKey, newProductsInCart);
    populateCartList();
  }
}

export function addToCart() {
  const localStorageKey = "products";
  const id = this.dataset.id;
  const title = this.dataset.title;
  const price = this.dataset.price;
  const image = this.dataset.imageurl;
  const altText = this.dataset.alt;

  const productsInCart = getfromstorage("products");
  const productInCart = productsInCart.find((product) => product.id === id);

  if (!productInCart) {
    const product = {
      id: id,
      title: title,
      price: price,
      imageUrl: image,
      altText: altText,
    };

    productsInCart.push(product);
    addToStorage(localStorageKey, productsInCart);
    this.style.color = "#369D66";
  } else {
    const newProductsInCart = productsInCart.filter((product) => product.id !== id);
    addToStorage(localStorageKey, newProductsInCart);
    this.style.color = "#282828";
  }
}

export function individualAddToCart() {
  const addToCartBtn = document.querySelector(".addtoCart");
  addToCartBtn.addEventListener("click", addToCart);
}
