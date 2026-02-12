import {addItemOrIncreaseQuantity,cart,loadFromStorage} from "../../data/cart.js";

describe("Test suite:addItemOrIncreaseQuantity!!!",()=>
{
  it("add an existing item to cart",()=>
  {
    spyOn(localStorage,'saveToLocalStorage');
    //Creating an fake method version of getItem method in localStorage
    spyOn(localStorage,'getItem').and.callFake(()=>{
      return JSON.stringify([]);
    });
    loadFromStorage();
    addItemOrIncreaseQuantity("83d4ca15-0f35-48f5-b7a3-1ea210004f2e");
    expect(cart.length).toEqual(1);
  });

  it("add an new item to cart",()=>
  {

  });

});