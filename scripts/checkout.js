import { products } from "../data/products.js";
import { cart, remove } from "../data/cart.js";
import {priceFormatting} from '../scripts/utils/money.js';
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
                <div class="free-shipping">
                  <div class="free-shipping-button">
                    <input
                      type="radio"
                      class="free-shipping-radio-button"
                      name="free-shipping-${matchedProduct.productId}"
                    />
                  </div>
                  <div class="free-shipping-details">
                    <div class="free-shipping-date"></div>
                    <div class="shipping-charge">FREE Shipping</div>
                  </div>
                </div>
                <div class="midlevel-shipping">
                  <div class="midlevel-shipping-button">
                    <input type="radio" name="free-shipping-${matchedProduct.productId}" />
                  </div>
                  <div class="midlevel-shipping-details">
                    <div class="midlevel-shipping-date"></div>
                    <div class="midlevel-shipping-charge">$4.99 - Shipping</div>
                  </div>
                </div>
                <div class="highlevel-shipping">
                  <div class="highlevel-shipping-button">
                    <input type="radio" name="free-shipping-${matchedProduct.productId}" />
                  </div>
                  <div class="highlevel-shipping-details">
                    <div class="highlevel-shipping-date"></div>
                    <div class="highlevel-shipping-charge">
                      $4.99 - Shipping
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>`;

});

document.querySelector('.product-container').innerHTML = productString;






//Adding EventLister to all of the Delete Buttons in the Cart Page.

let list=document.querySelectorAll('.delete-button');
list.forEach((button)=>
{
  button.addEventListener('click',()=>
  {
    
     let id=button.dataset.productId;
    remove(id);

    /*Deleting div(product) using the unique class name(Product id as an class name)*/
    document.querySelector(`.productID-${id}`).remove();  
     
  });
});


  
