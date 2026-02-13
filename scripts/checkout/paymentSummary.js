import {cart} from "../../data/cart.js";
import {products,getProduct} from "../../data/products.js";
import { getDeliveryOption } from "../deliveryOptions.js";
import {priceFormatting} from "../utils/money.js";


export function renderPaymentSummary()
{
  let productPriceCents=0;
  let deliveryPriceCents=0;
  cart.forEach((cartItem)=>
  {
    const id=cartItem.productId;

    const matchedProduct=getProduct(id);
    const deliveryOption=getDeliveryOption(cartItem.deliveryOptionID);
    
    productPriceCents+=(matchedProduct.priceCents*cartItem.quantity);
    deliveryPriceCents+=deliveryOption.price;
    
   
  });
  const totalPriceBeforeTax=productPriceCents+deliveryPriceCents;
  const tax=totalPriceBeforeTax*0.1;

  const totalPrice=tax+totalPriceBeforeTax;

  

  

  let paymentSummaryHTML=`
  <div class="order-summary">
            <div class="order-summary-title"><p>Order Summary</p></div>
            <div class="order-summary-item">
              <div>Items(3):</div>
              <div class="order-summary-item-price">$${priceFormatting(productPriceCents)}</div>
            </div>
            <div class="order-summary-shipping">
              <div>Shipping & handling:</div>
              <div class="order-summary-shipping-price">$${priceFormatting(deliveryPriceCents)}</div>
            </div>
            <div class="order-summary-before-tax">
              <div>Total before tax:</div>
              <div class="order-summary-before-tax-price">$${priceFormatting(totalPriceBeforeTax)}</div>
            </div>
            <div class="order-summary-total">
              <div>Estimated tax (10%):</div>
              <div class="order-summary-total-price">$${priceFormatting(tax)}</div>
            </div>
            <hr />
            <div class="order-total-price">
              <div>Order total:</div>
              <div>$${priceFormatting(totalPrice)}</div>
            </div>
            <div class="order-summary-button">
              <button class="order-button">Place your order</button>
            </div>
          </div>`;

          document.querySelector(".summary-container").innerHTML=paymentSummaryHTML;
}