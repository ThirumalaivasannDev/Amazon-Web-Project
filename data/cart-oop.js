 
 //Object cart
 const cart = {
  cartItems: undefined,
  localStorage() {
    //Using this to access current object attributes and methods...
    this.cartItems = JSON.parse(localStorage.getItem('cart-oop')) ||
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
    localStorage.setItem('cart-oop', JSON.stringify(this.cartItems));
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

cart.localStorage();


//Calling loadStorge method

cart.localStorage();
cart.addItemOrIncreaseQuantity('58b4fc92-e98c-42aa-8c55-b6b79996769a');
cart.addItemOrIncreaseQuantity('901eb2ca-386d-432e-82f0-6fb1ee7bf969');
console.log(cart);

//Object bussinessCart just an copy of cart object
const bussinessCart = {
  cartItems: undefined,
  localStorage() {
    //Using this to access current object attributes and methods...
    this.cartItems = JSON.parse(localStorage.getItem('cart-bussiness')) ||
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
    localStorage.setItem('cart-bussiness', JSON.stringify(this.cartItems));
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

bussinessCart.localStorage();
console.log(bussinessCart);