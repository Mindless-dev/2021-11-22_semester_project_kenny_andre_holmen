export function createadminlist(data, targetLocation) {
  const targetedHtml = document.querySelector(targetLocation);

  targetedHtml.innerHTML = "";

  data.forEach(function (shoe) {
    targetedHtml.innerHTML += `
      <li>
        <div class= "information">
          <p>product Name: ${shoe.title} </p>
          <p>Product Id: ${shoe.id}</p> 
        </div>
        <div class="editDelete">
          <button id = "deleteProduct" data-id="${shoe.id}">Delete product</button>
          <button  id="edit" data-title= "${shoe.title}" 
          data-id="${shoe.id}" data-price="${shoe.Price}"
          data-description="${shoe.description}" data-imageurl="${!shoe.imageUrl ? shoe.productImage[0].url : shoe.imageUrl}"
          data-imagealt= "${shoe.ImageAltText}" data-featured="${shoe.featured}"> Edit</button 
        </div>
      </li>`;
  });
}
