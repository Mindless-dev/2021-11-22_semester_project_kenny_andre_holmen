import { createNav } from "./components/nav/menu.js";
import { productListEditDelete } from "./utils/admin/adminlist.js";
import { getfromstorage } from "./utils/localstorage.js";
import { newProductData } from "./utils/admin/newproduct.js";
import { openWidget } from "./settings/cloudinary.js";
import { logOutFunctionality } from "./utils/admin/logout.js";

createNav();
const user = getfromstorage("user");
const token = getfromstorage("token");

if (user.length === 0) {
  location.href = "/";
}
newProductData(token);
productListEditDelete();

logOutFunctionality();

const createProductImageUpload = document.querySelector("#upload_widget1");
const editProductImageUpload = document.querySelector("#upload_widget2");

createProductImageUpload.addEventListener("click", openWidget);
editProductImageUpload.addEventListener("click", openWidget);
