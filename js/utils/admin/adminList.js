import { baseUrl } from "../../settings/api.js";
import { createadminlist } from "../../components/admin/createAdminlist.js";
import { deleteProduct } from "../../settings/admin/deleteProduct.js";
import { populateForm } from "../../components/admin/populateEditform.js";
import { createMessage } from "../../components/message/message.js";

export async function productListEditDelete() {
  try {
    const url = baseUrl + "products/";
    const response = await fetch(url);
    const json = await response.json();

    createadminlist(json, ".productList");
    const deleteButton = document.querySelectorAll("#deleteProduct");
    deleteButton.forEach((button) => button.addEventListener("click", deleteProduct));

    const editButton = document.querySelectorAll("#edit");
    editButton.forEach((button) => button.addEventListener("click", populateForm));
  } catch (error) {
    createMessage(".productList", "error", "An error occured please refresh the page");
  }
}
