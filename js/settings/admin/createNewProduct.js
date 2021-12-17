import { getfromstorage } from "../../utils/localstorage.js";
import { baseUrl } from "../api.js";
import { createMessage } from "../../components/message/message.js";
import { successFullyCreated } from "../../utils/admin/success.js";

const token = getfromstorage("token");

export async function createNewProduct(title, price, image, description, featured, imageAltText) {
  const url = baseUrl + "products";

  const data = JSON.stringify({
    title: title,
    Price: price,
    imageUrl: image,
    description: description,
    featured: featured,
    ImageAltText: imageAltText,
  });

  const options = {
    method: "POST",
    body: data,
    headers: {
      "content-type": "application/json",
      Authorization: `bearer ${token}`,
    },
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();

    if (json.created_at) {
      successFullyCreated();
    }

    if (json.error) {
      createMessage(".createNewError", "error", "product was not created try again.");
    }
  } catch (error) {
    createMessage(".createNewError", "error", "product was not created try again.");
  }
}
