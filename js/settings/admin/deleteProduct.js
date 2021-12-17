import { baseUrl } from "../api.js";
import { getfromstorage } from "../../utils/localstorage.js";
import { createMessage } from "../../components/message/message.js";

const token = getfromstorage("token");
export async function deleteProduct(event) {
  const id = this.dataset.id;
  const url = baseUrl + "products/" + id;

  const options = {
    method: "DELETE",
    headers: { Authorization: `bearer ${token}` },
  };

  const deleteConfirmed = confirm("are you sure you want to delete this product?");

  if (deleteConfirmed) {
    try {
      const response = await fetch(url, options);
      const json = await response.json();
      console.log(json);
      location.href = "/admin.html";
    } catch (error) {
      createMessage(".deleteError", "error", "An error Occured, please try refreshing the page");
    }
  }
}
