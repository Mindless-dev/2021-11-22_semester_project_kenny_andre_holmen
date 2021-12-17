const updateForm = document.querySelector("#updateProduct");
const myWidget = cloudinary.createUploadWidget(
  {
    cloudName: "dmypm1x6b",
    uploadPreset: "fhyuzd37",
  },
  (error, result) => {
    if (!error && result && result.event === "success") {
      if (updateForm.style.display != "flex") {
        const productImageInput = document.querySelector("#productImage");
        productImageInput.value = result.info.url;
      }

      const productImageInput = document.querySelector("#productImageEdit");
      productImageInput.value = result.info.url;
      console.log("this is a for product editing");
    }
    false;
  }
);

export function openWidget() {
  myWidget.open();
}
