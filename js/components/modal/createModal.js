import { addToCart } from "../../utils/cart/cartFunctionality.js";

const body = document.querySelector("body");

export function modalHtml(event) {
  const modalContainer = document.querySelector("#productModalContainer");
  const id = this.dataset.id;
  const title = this.dataset.title;
  const price = this.dataset.price;
  const description = this.dataset.description;
  const url = this.dataset.imageurl;
  const altText = this.dataset.imagealt;

  modalContainer.innerHTML = `
    <section class="modal">
    <div class="modalContent">
      <div class="modalImage">
        <button id= "closeModal"><i class="fas fa-times"></i></button>
        <image src="${url}" alt="${altText}"><image>
      </div>
      <div class="productInfo">
        <h3>${title}</h3>
        <p>${description}</p>
        <div class="shoeSize">
        <label for="shoeSize">Shoe size</label>
        <select id= "shoeSize">
        <option>40</option>
          <option>41</option>
          <option>42</option>
          <option>43</option>
          <option>44</option>
          <option>45</option>
        </select>
        </div>
        <div class="priceCart">
          <p>Price: ${price} kr</p>
          <button class="addToCart" data-id="${id}" data-title="${title}" data-price="${price}" data-imageurl="${url}" data-alt="${altText}"><i class="fas fa-shopping-cart"></i></button> 
        </div>
      </div>    
    </div>
    </section>`;

  const modalCloseBtn = document.querySelector("#closeModal");
  modalCloseBtn.addEventListener("click", closeModal);
  const cartBtn = document.querySelector(".addToCart");
  cartBtn.addEventListener("click", addToCart);
  body.style.overflow = "hidden";
}

function closeModal(event) {
  const modalContainer = document.querySelector("#productModalContainer");
  modalContainer.innerHTML = ``;
  body.style.overflow = "visible";
}
