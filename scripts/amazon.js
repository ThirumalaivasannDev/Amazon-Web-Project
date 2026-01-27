
let productHTML='';

products.forEach( (product)=>
{
  productHTML = productHTML+ ` <div class="product">
        <div class="product-image"> <img class="image"src="${product.image}"></div>
      <div class="product-description"><p>${product.name}</p></div>
      <div class="product-rating"> <img class="rating-image" src="images/ratings/rating-${product.rating.stars*10}.png"> <span >${product.rating.count}</span></div>
      <div class="product-price"> <p>$${(product.priceCents/100).toFixed(2)}</p></div>
      <div class="product-quantity"> <select >
        <option value="">1</option>
        <option value="">2</option>
        <option value="">3</option>
        <option value="">4</option>
        <option value="">5</option>
        <option value="">6</option>
        <option value="">7</option>
        <option value="">8</option>
        <option value="">9</option>
        <option value="">10</option>
      </select></div>
      <div class="add-to-cart"> <button class="add-to-cart-button">Add to Cart</button></div> 
    </div>` ;
    
}
);
console.log(productHTML);
document.querySelector('.product-container').innerHTML = productHTML;