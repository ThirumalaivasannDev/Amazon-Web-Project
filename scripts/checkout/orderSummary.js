import { getProduct } from "../../data/products.js";
import { cart, remove,updateDeliveryOptionID } from "../../data/cart.js";
import { priceFormatting } from '../utils/money.js';
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';
import {deliveryOptions,getDeliveryOption} from "../deliveryOptions.js";
import { renderPaymentSummary } from "./paymentSummary.js";


//Single function of this page
export function renderOrderSummary()
{



let productString = '';
cart.forEach((cartItem) => {

  let id = cartItem.productId;
  let matchedProduct = getProduct(id);
  

  const deliveryOptionId=cartItem.deliveryOptionID;
  
  

  let deliveryOption=getDeliveryOption(deliveryOptionId);

    const today = dayjs();
    const deliveryDate = today.add( deliveryOption.deliveryDays , 'days');
    const dateString = deliveryDate.format('dddd, MMMM D');

  productString += `<!--Product-1-->
          <div class="product productID-${id}">
            <div class="delivery-date">Delivery date:${dateString}</div>
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
                <div class="product-price"><p>$${matchedProduct.getPrice()}</p></div>
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
                
                ${deliveryOptionsHTML(matchedProduct.id,cartItem.deliveryOptionID)}
                
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

    //MVC-Updating the HTML page
    renderOrderSummary();
    renderPaymentSummary();

  });
});


//Adding Eventlistener to radio button for dynamic changes of dates based on the radio button

document.querySelectorAll('.js-delivery-option').forEach((options)=>
{
  options.addEventListener('click',()=>{
    
    let {productId,deliveryId}=options.dataset;
    updateDeliveryOptionID(productId,deliveryId);
    renderOrderSummary();
    renderPaymentSummary();
  });
});



//Function to add Delivery Options

function deliveryOptionsHTML(matchedProductId,cartItemDeliveryOptionID) {
  let HTML='';
  deliveryOptions.forEach((deliveryOption) => {

    let today = dayjs();
    let deliveryDate = today.add(deliveryOption.deliveryDays, 'days');
    let dateString = deliveryDate.format('dddd, MMMM D');
    let price= deliveryOption.price!==0? `$${priceFormatting(deliveryOption.price)}-`:'FREE';
    const isChecked= cartItemDeliveryOptionID===deliveryOption.id;

   HTML+=    `<div class="delivery-shippin-option ">
                  <div class="free-shipping-button js-delivery-option"
                  data-product-id="${matchedProductId}"
                  data-delivery-id="${deliveryOption.id}"
                  >
                    <input
                      type="radio"
                      ${isChecked?'checked':''}
                      class="free-shipping-radio-button"
                      name="free-shipping-${matchedProductId}"
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

}

