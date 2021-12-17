import { createNewProduct } from "../../settings/admin/createNewProduct.js";
import { urlValidation } from "../regex/regex.js";
import { createMessage } from "../../components/message/message.js";
export function newProductData(jwt) {
  const form = document.querySelector(".createNewProduct");

  form.addEventListener("submit", createProduct);
}

function createProduct(event) {
  event.preventDefault();

  const productTitleInput = document.querySelector("#productName");
  const productPriceInput = document.querySelector("#productPrice");
  const productDescriptionInput = document.querySelector("#productDescription");
  const productImageInput = document.querySelector("#productImage");
  const productFeaturedCheckbox = document.querySelector("#featuredProduct");
  const productImageDescription = document.querySelector("#imageAltText");

  const shoeTitleValue = productTitleInput.value;
  const productPriceValue = parseFloat(productPriceInput.value);
  const productImageUrlValue = productImageInput.value;
  const productImageDescriptionValue = productImageDescription.value;
  const productDescriptionValue = productDescriptionInput.value;
  const productFeaturedValue = productFeaturedCheckbox.checked;

  console.log(shoeTitleValue, productPriceValue, productImageUrlValue, productDescriptionValue, productFeaturedValue, productImageDescriptionValue);

  if ((shoeTitleValue.length > 0) & !isNaN(productPriceValue) & urlValidation(productImageUrlValue) & (productDescriptionValue.length > 0)) {
    createNewProduct(
      shoeTitleValue,
      productPriceValue,
      productImageUrlValue,
      productDescriptionValue,
      productFeaturedValue,
      productImageDescriptionValue
    );
  } else {
    createMessage(".createNewError", "error", "Please provide values to all input fields");
  }
}
