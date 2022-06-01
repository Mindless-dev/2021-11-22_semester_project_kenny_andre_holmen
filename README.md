# Shoeyverse

![image](https://res.cloudinary.com/dmypm1x6b/image/upload/v1654118080/shoeyverse_iiidf7.jpg)

Shoeyverse is an ecommerce Shoe store, created for an exam in my studies to become a front-end dev.
Users can add items to the cart, search for products and remove items from the cart.
Admin Users can log in and create, update and delete products of the page.

## Description

### Homepage Page

- fetching data from the api.
- displays an image fetched with the api.
- products have an modal to add item to cart.

#### Modal

- User can see all product description.
- toggle products in and out of cart.
- select shoe size.

### Log in Page

- Log in form with validation.
- Sends request to api on submit.
- If Log in is sucessfull: stores token in localstorage and redirects to admin page.

### Admin Page

- Admin can create new products with product form.
- List of all products with delete and edit button.
- Admin can edit products, form gets displayed with current values under the product list (subject to change).
- Admin can delete products with delete button on products list.

#### Log in details

- Log in details can be provided upon request.

### Cart Page

- Displays products added to the cart.
- Displays total sum of all Products in cart.
- User can remove individual items from the cart.
- User can clear the cart with the clear cart button.

### products page

- Displays all products from the api.
- Users can search for product by title and description.
- Users can toggle product in and out of the cart via the modal.

### individual product page

- Displays a single product with an image and all description the product has.
- User can toggle the product in and out of the cart.
- User can go back to the previous page using "Previous page" button.

### Missing features

#### Note: the missing features are currently worked on.

- No indication if the item is added to the cart or not.
- Shoe sizes can be selected but are not a part of the api, hardcoded size to be 45.

## Built With

- [Html] (https://developer.mozilla.org/en-US/docs/Web/HTML)
- [Javascript](https://developer.mozilla.org/en-US/docs/Web/javascript)
- [SCSS](https://sass-lang.com/)
- [Strapi] (https://docs.strapi.io/developer-docs/latest/getting-started/introduction.html)

## Getting Started

### Installing

1. Clone the repo:

```bash
git clone https://github.com/Mindless-dev/2021-11-22_semester_project_kenny_andre_holmen.git
```

### Running

To preview the site use a preview extension:

For Example: [liveServer] (https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

## Contributing

### Note: currently not accepting any contributions.

If you would like to contribute to the project follow the process described below:

1. Fork repostory
2. Clone forked repo
3. Make changes to the project
4. Push changes
5. Create pull request

## Contact

[My LinkedIn page](https://www.linkedin.com/in/kenny-holmen-b853b4a1)
