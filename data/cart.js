export let cart;
loadFromStorage();

//Loading cart 
export function loadFromStorage() {
  cart = JSON.parse(localStorage.getItem('cart')) ||
    [
      {
        quantity: 1,
        productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
        deliveryOptionID: '2',
      },
      {
        quantity: 1,
        productId: '6b07d4e7-f540-454e-8a1e-363f25dbae7d',
        deliveryOptionID: '3',
      },
      {
        quantity: 1,
        productId: '5968897c-4d27-4872-89f6-5bcb052746d7',
        deliveryOptionID: '1',
      },

    ];
}
//Camel Case
//Add items or increasing cart quantity
export function addItemOrIncreaseQuantity(id) {


  let match;
  cart.forEach((item) => {
    if (item.productId === id) {
      match = item;
    }
  }
  );
  if (match) {
    match.quantity += 1;
  }
  else {
    cart.push({ quantity: 1, productId: id, deliveryOptionID: '1' });
  }
  saveToLocalStorage();
}

//Updating Cart Quantity
export function updateQuantity() {
  let totalQuantity = 0;
  cart.forEach((item) => {
    totalQuantity += item.quantity;
  });
  document.querySelector('.cart-quantity').innerHTML = totalQuantity;
  saveToLocalStorage();
}

//Deleting product from cart

export function remove(id) {

  let newArray = [];
  cart.forEach((product) => {
    if (product.productId !== id) {
      newArray.push(product);
    }
  });
  cart = newArray;
  saveToLocalStorage();
}


//Storing Cart data into Localstorage to save data into browser

export function saveToLocalStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}





//Updating Delivery Option ID

export function updateDeliveryOptionID(productID, deliveryOption) {
  cart.forEach((cartItem) => {
    if (productID === cartItem.productId) {
      cartItem.deliveryOptionID = deliveryOption;

    }
  });
  saveToLocalStorage();
}

//CallBack Load Cart
export function loadCart(fun)
{
  const xhr=new XMLHttpRequest();


  xhr.addEventListener('load',()=>
  {
    console.log(xhr.response);
    fun();
  });
  

  xhr.open('GET','https://supersimplebackend.dev/cart');
  xhr.send();
  
}