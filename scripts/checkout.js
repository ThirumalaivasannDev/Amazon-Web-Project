import { products } from "../data/products.js";
import { cart } from "../data/cart.js";

let productString = '';


cart.forEach((cartItem) => {

  let id=cartItem.productId;
  let matchedProduct='';
  products.forEach((item)=>
  {
    
    if(item.id===id)
    {

      matchedProduct=item;
    }
  });
  console.log(matchedProduct);

  productString += `<!--Product-1-->
          <div class="product">
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
                <div class="product-price"><p>$${matchedProduct.priceCents/100}</p></div>
                <div class="product-quantity">
                  Quantity: ${cartItem.quantity}
                  <a class="update-button">Update</a>
                  <a class="delete-button">Delete</a>
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
                      name="free-shipping-radio-1"
                    />
                  </div>
                  <div class="free-shipping-details">
                    <div class="free-shipping-date">Tuesday, June 21</div>
                    <div class="shipping-charge">FREE Shipping</div>
                  </div>
                </div>
                <div class="midlevel-shipping">
                  <div class="midlevel-shipping-button">
                    <input type="radio" name="free-shipping-radio-1" />
                  </div>
                  <div class="midlevel-shipping-details">
                    <div class="midlevel-shipping-date">Wednesday, June 15</div>
                    <div class="midlevel-shipping-charge">$4.99 - Shipping</div>
                  </div>
                </div>
                <div class="highlevel-shipping">
                  <div class="highlevel-shipping-button">
                    <input type="radio" name="free-shipping-radio-1" />
                  </div>
                  <div class="highlevel-shipping-details">
                    <div class="highlevel-shipping-date">Monday, June 13</div>
                    <div class="highlevel-shipping-charge">
                      $4.99 - Shipping
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>`;

});

document.querySelector('.product-container').innerHTML=productString;
console.log(productString);
//Finding the prodcut  using the product ID

function findProduct(productId)
{

  

}