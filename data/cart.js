export const cart=[
  {
    quantity:1,
    productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6'
  },
  {
    quantity:1,
    productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d'
  },
  {
    quantity:1,
    productId:'6b07d4e7-f540-454e-8a1e-363f25dbae7d'
  },
  {
    quantity:1,
    productId:'5968897c-4d27-4872-89f6-5bcb052746d7'
  },
  {
    quantity:1,
    productId:'8c9c52b5-5a19-4bcb-a5d1-158a74287c53'
  }
];

//Camel Case
//Add items or increasing cart quantity
export function addItemOrIncreaseQuantity(button)
{

  const id=button.dataset.productId;
    let match;
    cart.forEach((item)=>
    {
      if(item.productId===id)
      {
        match=item;
      } 
    }
    );
    if(match)
    {
      match.quantity+=1;
    }
    else
    {
      cart.push({quantity:1,productId:id});
    }
}

//Updating Cart Quantity
export function  updateQuantity()
{
  let totalQuantity=0;
    cart.forEach((item)=>
    {
      totalQuantity+=item.quantity;
    });
    document.querySelector('.cart-quantity').innerHTML=totalQuantity;
}
