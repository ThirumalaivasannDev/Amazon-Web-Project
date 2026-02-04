import { products } from "../data/products.js";
import { cart, remove } from "../data/cart.js";
import { priceFormatting } from '../scripts/utils/money.js';
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';
import deliveryOptions from "./deliveryOptions.js";



let productString = '';
cart.forEach((cartItem) => {

  let id = cartItem.productId;
  let matchedProduct = '';
  products.forEach((item) => {

    if (item.id === id) {

      matchedProduct = item;
    }
  });

  productString += `<!--Product-1-->
          <div class="product productID-${id}">
            <div class="delivery-date">Delivery date:Tuesday,June 21</div>
            <div class="product-delivery-description">
              <div class="product-image">
                <img
                  class="image"
                  src="${matchedProduct.image}"
                />
              </div>
              <div class="product-description">
                <div class="product-name">
                  ${matchedProduct.name}
                </div>
                <div class="product-price"><p>$${priceFormatting(matchedProduct.priceCents)}</p></div>
                <div class="product-quantity">
                  Quantity: ${cartItem.quantity}
                  <a data-product-id='${matchedProduct.id}' class="update-button">Update</a>
                  <a 
                  data-product-id='${matchedProduct.id}'
                  class="delete-button">Delete</a>
                </div>
              </div>
              <div class="delivery-option">
                <div class="choosing-delivery-options">
                  Choose a delivery option:
                </div>
                
                ${deliveryOptionsHTML()}
                
              </div>
            </div>
          </div>`;

});

document.querySelector('.product-container').innerHTML = productString;






//Adding EventLister to all of the Delete Buttons in the Cart Page.

let list = document.querySelectorAll('.delete-button');
list.forEach((button) => {
  button.addEventListener('click', () => {

    let id = button.dataset.productId;
    remove(id);

    /*Deleting div(product) using the unique class name(Product id as an class name)*/
    document.querySelector(`.productID-${id}`).remove();

  });
});



//Function to add Delivery Options

function deliveryOptionsHTML() {
  let HTML='';
  deliveryOptions.forEach((deliveryOption) => {
    let today = dayjs();
    let deliveryDate = today.add(deliveryOption.deliveryDays, 'days');
    let dateString = deliveryDate.format('dddd, MMMM D');
    let price= deliveryOption.price!==0? `$${priceFormatting(deliveryOption.price)}-`:'FREE';

   HTML+=    `<div class="delivery-shippin-option">
                  <div class="free-shipping-button">
                    <input
                      type="radio"
                      class="free-shipping-radio-button"
                      name="free-shipping-"
                    />
                  </div>
                  <div class="free-shipping-details">
                    <div class="shipping-date">${dateString}</div>
                    <div class="shipping-charge">${price} Shipping</div>
                  </div>
                </div>`;
                
  });
  return HTML;
}

