import { cart, removeFromCart, updateDileveryOption } from "../Data/cart.js";
import { product, getProduct } from "../Data/product.js";
import { formatCurrency } from "../Utility/money.js";
//dayjs ECM version
import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";
import { deliveryOptions, getDeliveryOption } from "../Data/deliveryOptions.js";
import {renderPaymentSummary} from '../checkout/paymentSummary.js'

//This function is run all the code once again to change the data in real time
export function renderOrderSummary() {
  let cartSumarryHTML = "";

  cart.forEach((cartItem) => {
    const productId = cartItem.productId;

    const matchingProduct = getProduct(productId);

    const deliveryOptionId = cartItem.deliveryOptionId;

    const deliveryOption = getDeliveryOption();

    

    const today = dayjs();
    const deliveryDate = today.add(deliveryOption.deliveryDays, "days");
    const dateString = deliveryDate.format("dddd, MMMM D");

    //This piece of code generates the HTML for checkout page
    cartSumarryHTML += `
    <div class="cart-item-container
      js-cart-item-container-${matchingProduct.id}">
      <div class="delivery-date">
        Cart Item: ${matchingProduct.name}
      </div>

      <div class="cart-item-details-grid">
        <img class="product-image"
          src="${matchingProduct.image}">

        <div class="cart-item-details">
          <div class="product-name">
            ${matchingProduct.name}
          </div>
          <div class="product-price">
            $${formatCurrency(matchingProduct.priceCents)}
          </div>
          <div class="product-quantity">
            <span>
              Quantity: <span class="quantity-label">${cartItem.quantity}</span>
            </span>
            <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${
              matchingProduct.id
            }">
              Remove
            </span>
          </div>
        </div>

        <div class="delivery-options">
          <div class="delivery-options-title">
            Choose a delivery option:
          </div>
          ${deliveryOptionsHTML(matchingProduct, cartItem)}
          </div>
        </div>
      </div>
    </div>
  `;

  });

  function deliveryOptionsHTML(matchingProduct, cartItem) {
    let html = "";
    deliveryOptions.forEach((deliveryOption) => {
      const today = dayjs();
      const deliveryDate = today.add(deliveryOption.deliveryDays, "days");
      const dateString = deliveryDate.format("dddd, MMMM D");

      const priceString =
        deliveryOption.priceCents === 0
          ? "FREE"
          : `$${formatCurrency(deliveryOption.priceCents)}-`;

      const isChecked = deliveryOption.id === cartItem.deliveryOptionId;

      html += `
    <div class="delivery-option js-delivery-option"
     data-product-id = "${matchingProduct.id}"
     data-delivery-option-id = "${deliveryOption.id}">
            <input type="radio"
              ${isChecked ? "checked" : ""}
              class="delivery-option-input"
              name="delivery-option-${matchingProduct.id}">
            <div>
              <div class="delivery-option-date">
                ${dateString}
              </div>
              <div class="delivery-option-price">
                ${priceString} - Shipping
              </div>
            </div>
          </div>
    `;
    });
    return html;
  }

  //This is the DOM code to display the cart on webpage
  document.querySelector(".js-order-summary").innerHTML = cartSumarryHTML;

  //This code is to remove the product from cart array
  document.querySelectorAll(".js-delete-link").forEach((link) => {
    link.addEventListener("click", () => {
      const productId = link.dataset.productId;
      removeFromCart(productId);

      //This code is to remove the product from the DOM
      const container = document.querySelector(
        `.js-cart-item-container-${productId}`
      );
      container.remove();

      renderPaymentSummary();
    });
  });


  document.querySelectorAll(".js-delivery-option").forEach((element) => {
    element.addEventListener("click", () => {
      const { productId, deliveryOptionId } = element.dataset;
      updateDileveryOption(productId, deliveryOptionId);
      renderOrderSummary();
      renderPaymentSummary();
    });
  });
}
renderOrderSummary();


