export const cart=[];

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
