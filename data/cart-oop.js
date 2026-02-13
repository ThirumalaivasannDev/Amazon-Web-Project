 
 
 //Function for Generating Cart
function cartGenerator(localStorageKey)
{
const cart = {
  cartItems: undefined,
  localStorage() {
    //Using this to access current object attributes and methods...
    this.cartItems = JSON.parse(localStorage.getItem(localStorageKey)) ||
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
  },
  saveToLocalStorage() {
    localStorage.setItem(localStorageKey, JSON.stringify(this.cartItems));
  },
  addItemOrIncreaseQuantity(id) {


    let match;
    this.cartItems.forEach((item) => {
      if (item.productId === id) {
        match = item;
      }
    }
    );
    if (match) {
      match.quantity += 1;
    }
    else {
      this.cartItems.push({ quantity: 1, productId: id, deliveryOptionID: '1' });
    }
    this.saveToLocalStorage();
  },
  remove(id) {

    let newArray = [];
    this.cartItems.forEach((product) => {
      if (product.productId !== id) {
        newArray.push(product);
      }
    });
    this.cartItems = newArray;
    this.saveToLocalStorage();
  },
  updateQuantity() {
    let totalQuantity = 0;
    this.cartItems.forEach((item) => {
      totalQuantity += item.quantity;
    });
    document.querySelector('.cart-quantity').innerHTML = totalQuantity;
    this.saveToLocalStorage();
  },
  updateDeliveryOptionID(productID, deliveryOption) {
    this.cartItems.forEach((cartItem) => {
      if (productID === cartItem.productId) {
        cartItem.deliveryOptionID = deliveryOption;

      }
    });
    this.saveToLocalStorage();
  }
};

return cart;
}

const cart=cartGenerator('cart-oop');
const bussinessCart=cartGenerator('cart-bussiness');

cart.localStorage();
bussinessCart.localStorage();

//console.log(cart);
//console.log(bussinessCart);