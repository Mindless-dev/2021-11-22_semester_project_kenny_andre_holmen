import { createHtml } from "../../components/products/createProducts.js";
import { createModal } from "../modal/modalFunctionality.js";

export default function filterShoes(shoes) {
  const searchInput = document.querySelector("#searchInput");

  if (searchInput) {
    searchInput.onkeyup = function (event) {
      const SearchValue = event.target.value.trim().toLowerCase();
      const filteredBySearch = shoes.filter(function (shoes) {
        const shoeTitle = shoes.title.toLowerCase();
        const shoeDescription = shoes.description.toLowerCase();

        if (shoeTitle.startsWith(SearchValue) || shoeDescription.includes(SearchValue)) {
          return true;
        }

        if (!SearchValue) {
          return true;
        }
      });
      createHtml(filteredBySearch, ".allProducts");
      createModal();
    };
  }
}
