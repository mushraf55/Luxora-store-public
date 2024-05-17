import { product } from "./Data/product.js";
import { cart, addToCart } from "./Data/cart.js";
import {formatCurrency} from './Utility/money.js'

let productsHTML = "";

//This code generates the HTML for the products
product.forEach((products) => {
  productsHTML += `
    <div class="product-container">
          <div class="product-image-container">
            <img
              class="product-image"
              src="${products.image}" />
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${products.name}
          </div>

          <div class="product-rating-container">
            <img
              class="product-rating-stars"
              src="Images/ratings/rating-${products.stars * 10}.png" />
          </div>

          <div class="product-price">$${formatCurrency(
            products.priceCents
          )}</div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="Images/icon/checkmark.png" />
            Added
          </div>

          <button
            class="add-to-cart-button button-primary js-add-to-cart"
            " data-product-id = "${products.id}">
            Add to Cart
          </button>
        </div>
    `;
});


//This code is to display the generated code on the web page
document.querySelector(".js-products-grid").innerHTML = productsHTML;

//This piece of code updates the cart quantity as we click on 'Add to cart'
function updateCartQuantity() {
  let cartQuantity = 0;
  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  //This code is to display the cart quantity using DOM
  document.querySelector(".js-cart-quantity").innerHTML = cartQuantity;

}

/*This code loops through the cart and add the product with the given Dataset which is id
and run the following funtions within it */
document.querySelectorAll(".js-add-to-cart").forEach((button) => {
  button.addEventListener("click", () => {
    const productId = button.dataset.productId;
    //Function to add product to cart
    addToCart(productId);
    //Function to update the cart quantity
    updateCartQuantity();
  });
});

