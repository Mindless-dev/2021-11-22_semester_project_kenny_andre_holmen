import { createHtml, createIndividualProduct } from "../components/products/createProducts.js";
import { individualAddToCart } from "./cart/cartFunctionality.js";
import { createModal } from "./modal/modalFunctionality.js";
import filterShoes from "./products/filter.js";
import { createMessage } from "../components/message/message.js";

export async function apiCallProductCreation(url, paramater, htmlTargetLocation) {
  try {
    const response = await fetch(url + paramater);
    const json = await response.json();
    createHtml(json, htmlTargetLocation);
    filterShoes(json);
    createModal();
  } catch (error) {
    createMessage(htmlTargetLocation, "error", "an error occured, please refresh the page");
  }
}

export async function getIndividualProduct(url, htmlTargetLocation) {
  const querystring = document.location.search;
  const params = new URLSearchParams(querystring);
  const id = params.get("id");
  try {
    const response = await fetch(url + "products/" + id);
    const json = await response.json();
    const title = document.querySelector("title");
    createIndividualProduct(json, htmlTargetLocation);
    individualAddToCart();
    title.innerHTML = `Shoeyverse | ${json.title}`;
  } catch (error) {
    createMessage(htmlTargetLocation, "error", "an error occured, please refresh the page");
  }
}
