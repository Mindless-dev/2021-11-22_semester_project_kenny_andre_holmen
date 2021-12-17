import { editProduct } from "../../settings/admin/editProduct.js";
const updateForm = document.querySelector("#updateProduct");
const productName = document.querySelector("#productNameEdit");
const productPrice = document.querySelector("#productPriceEdit");
const productDescription = document.querySelector("#productDescriptionEdit");
const imageUrl = document.querySelector("#productImageEdit");
const imageAltText = document.querySelector("#imageAltTextEdit");
const featuredProduct = document.querySelector("#featuredproductEdit");
const productId = document.querySelector("#productId");

export function populateForm(event) {
  const id = this.dataset.id;
  const title = this.dataset.title;
  const price = this.dataset.price;
  const description = this.dataset.description;
  const url = this.dataset.imageurl;
  const altText = this.dataset.imagealt;
  const featured = JSON.parse(this.dataset.featured);

  productName.value = title;
  productPrice.value = price;
  productDescription.value = description;
  imageUrl.value = url;
  imageAltText.value = altText;
  featuredProduct.checked = featured;
  productId.value = id;
  updateForm.style.display = "flex";
}

updateForm.addEventListener("submit", editProduct);
