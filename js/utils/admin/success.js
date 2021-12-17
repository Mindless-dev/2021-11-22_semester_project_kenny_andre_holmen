export function successFullyCreated() {
  const Message = document.querySelector(".successCreate");
  const title = document.querySelector("#productName");
  const price = document.querySelector("#productPrice");
  const description = document.querySelector("#productDescription");
  const url = document.querySelector("#productImage");
  const alt = document.querySelector("#imageAltText");
  const featured = document.querySelector("#featuredProduct");

  Message.style.display = "flex";
  title.value = "";
  price.value = "";
  description.value = "";
  url.value = "";
  alt.value = "";
  featured.value = false;

  setTimeout(() => {
    Message.style.display = "none";
  }, 2000);
}

export function sucessFullyEditedProduct() {
  const form = document.querySelector("#updateProduct");
  const message = document.querySelector(".successEdit");
  message.style.display = "flex";

  setTimeout(() => {
    form.style.display = "none";
  }, 2000);
}
