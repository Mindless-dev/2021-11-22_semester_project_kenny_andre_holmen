export function createHtml(shoes, target) {
  const targetedHtml = document.querySelector(target);
  targetedHtml.innerHTML = "";

  const { pathname } = document.location;

  if (pathname === "/index.html" || pathname === "/") {
    shoes.forEach(function (shoe) {
      if (shoe.featured) {
        targetedHtml.innerHTML += `
            <section class="featuredProduct">
               <a href="individualproduct.html?id=${shoe.id}"><img src= "${!shoe.imageUrl ? shoe.productImage[0].url : shoe.imageUrl}" alt="${
          shoe.ImageAltText
        }"></a> 
                <h3>${shoe.title}</h3>
                <div class="description">
                <p>${shoe.Price} kr</p>
                <button class="iconButton" id="modalBtn"  data-title= "${shoe.title}" 
                data-id="${shoe.id}" data-price="${shoe.Price}"
                data-description="${shoe.description}" data-imageurl="${!shoe.imageUrl ? shoe.productImage[0].url : shoe.imageUrl}"
                 data-imagealt= "${shoe.ImageAltText}"><i class="fas fa-shopping-cart"></i></button> 
                </div>
            </section>

      
            `;
      }
    });
  } else {
    if (shoes.length === 0) {
      targetedHtml.innerHTML = "<h2> No products matches search</h2>";
    }
    shoes.forEach(function (shoe) {
      targetedHtml.innerHTML += `
      <section class="product">
      <a href="individualproduct.html?id=${shoe.id}"><img src= "${!shoe.imageUrl ? shoe.productImage[0].url : shoe.imageUrl}"
       alt="${shoe.ImageAltText}"></a> 
          <h3>${shoe.title}</h3>
          <div class="description">
          <p>${shoe.Price} kr</p>
          <button class="iconButton" id="modalBtn"  data-title= "${shoe.title}" 
                data-id="${shoe.id}" data-price="${shoe.Price}"
                data-description="${shoe.description}" data-imageurl="${!shoe.imageUrl ? shoe.productImage[0].url : shoe.imageUrl}"
                 data-imagealt= "${shoe.ImageAltText}"><i class="fas fa-shopping-cart"></i></button> 
          </div>
          
      </section>`;
    });
  }
}

export function createIndividualProduct(shoe, target) {
  const targetedHtml = document.querySelector(target);
  targetedHtml.innerHTML = `
                  <section class="individualProduct">
                  <img src= "${!shoe.imageUrl ? shoe.productImage[0].url : shoe.imageUrl}" alt="${shoe.ImageAltText}">
                  <div class="productInfo">
                    <h1>${shoe.title}</h1>
                    <p>${shoe.description}</p>
                    <div>
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
                  <p>${shoe.Price} kr</p>
                  <button class="addtoCart" data-title= "${shoe.title}" 
                  data-id="${shoe.id}" data-price="${shoe.Price}"
                  data-description="${shoe.description}" data-imageurl="${!shoe.imageUrl ? shoe.productImage[0].url : shoe.imageUrl}"
                   data-imagealt= "${shoe.ImageAltText}""><i class="fas fa-shopping-cart"></i></button> 
                  </div>
                  </div>                  
                  </section>`;
}
