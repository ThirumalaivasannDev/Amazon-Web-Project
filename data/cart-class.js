 //Class for generating Objects

 class Cart{
  cartItems;  //Attribute 1
  #localStorageKey;  //Attribute 2 ---> Private property in javascript


  constructor(localStorageKey)
  {
    this.#localStorageKey=localStorageKey;
    this.#localStorage();
  }

  //Method 1
  #localStorage() {  //---> Private Method
    //Using this to access current object attributes and methods...
    this.cartItems = JSON.parse(localStorage.getItem(this.#localStorageKey)) ||
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


  //Method 2
  saveToLocalStorage() {
    localStorage.setItem(this.#localStorageKey, JSON.stringify(this.cartItems));
  }

  //Method 3
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
  }

  //Method 4
  remove(id) {

    let newArray = [];
    this.cartItems.forEach((product) => {
      if (product.productId !== id) {
        newArray.push(product);
      }
    });
    this.cartItems = newArray;
    this.saveToLocalStorage();
  }

  //Method 5
  updateQuantity() {
    let totalQuantity = 0;
    this.cartItems.forEach((item) => {
      totalQuantity += item.quantity;
    });
    document.querySelector('.cart-quantity').innerHTML = totalQuantity;
    this.saveToLocalStorage();
  }

  //Method 6
  updateDeliveryOptionID(productID, deliveryOption) {
    this.cartItems.forEach((cartItem) => {
      if (productID === cartItem.productId) {
        cartItem.deliveryOptionID = deliveryOption;

      }
    });
    this.saveToLocalStorage();
  }
 }
 

 //Creation of objects

 const cart=new Cart('cart-oop-thirumalai');
 const bussinessCart=new Cart('cart-bussiness-vasan');

 

 

 console.log(cart);
 console.log(bussinessCart);
 console.log(bussinessCart instanceof Cart);
 
