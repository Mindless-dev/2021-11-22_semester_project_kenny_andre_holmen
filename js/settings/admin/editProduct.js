import { getfromstorage } from "../../utils/localstorage.js";
import { baseUrl } from "../api.js";
import { createMessage } from "../../components/message/message.js";
import { sucessFullyEditedProduct } from "../../utils/admin/success.js";

const productName = document.querySelector("#productNameEdit");
const productPrice = document.querySelector("#productPriceEdit");
const productDescription = document.querySelector("#productDescriptionEdit");
const imageUrl = document.querySelector("#productImageEdit");
const imageAltText = document.querySelector("#imageAltTextEdit");
const featuredProduct = document.querySelector("#featuredproductEdit");
const productId = document.querySelector("#productId");

const token = getfromstorage("token");

export async function editProduct(event) {
  event.preventDefault();
  const id = productId.value;
  const url = baseUrl + "products/" + id;
  const title = productName.value;
  const price = parseFloat(productPrice.value);
  const description = productDescription.value;
  const image = imageUrl.value;
  const altText = imageAltText.value;
  const featured = featuredProduct.checked;

  const data = JSON.stringify({
    title: title,
    Price: price,
    imageUrl: image,
    description: description,
    featured: featured,
    ImageAltText: altText,
  });

  const options = {
    method: "PUT",
    body: data,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();

    if (json.error) {
      createMessage(".editError", "error", "an error occured please try again.");
    } else {
      sucessFullyEditedProduct();
    }
  } catch (error) {
    createMessage(".editError", "error", "an error occured please try again.");
  }
}
