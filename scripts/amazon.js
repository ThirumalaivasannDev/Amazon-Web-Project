const productArray=[
  {
    image:'images/products/intermediate-composite-basketball.jpg',
    name:'Black and Gray Athletic Cotton Socks - 6 Pairs',
    rating:{
      star:4.5,
      number:87
    },
    price:1090
  },
  {
    image:'images/products/athletic-cotton-socks-6-pairs.jpg',
    name:'Intermediate Size Basketball',
    rating:{
      star:4,
      number:127
    },
    price:2095
  },

  {
    image:'images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
    name:'Adults Plain Cotton T-Shirt - 2 Pack',
    rating:{
      star:4.5,
      number:56
    },
    price:799
  }
];

let productHTML='';

productArray.forEach( (product)=>
{
  productHTML = productHTML+ ` <div class="product">
        <div class="product-image"> <img class="image"src="${product.image}"></div>
      <div class="product-description"><p>${product.name}</p></div>
      <div class="product-rating"> <img class="rating-image" src="images/ratings/rating-${product.rating.star*10}.png"> <span >${product.rating.number}</span></div>
      <div class="product-price"> <p>$${(product.price/100).toFixed(2)}</p></div>
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