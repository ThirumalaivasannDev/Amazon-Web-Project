import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProduct,loadProductFetch } from "../data/products.js";
import{loadCart} from "../data/cart.js";

async function loadPage()  //It can return a promise
{
  
  await loadProductFetch();

  await new Promise((resolve)=>
  {
    loadCart(()=>
    {
      resolve();
    });
  });

  renderOrderSummary();
  renderPaymentSummary();

}

loadPage();



/*

//Promise all
Promise.all([
loadProductFetch()

]).then((values)=>
{
 
  renderOrderSummary();
  renderPaymentSummary();
});


/*Use promises instead of callbacks
makes our code more flatten*/


/*
new Promise((resolve)=>
{
  loadProduct(()=>
  {
    resolve('This parameter value can be passed an an argument to then inner function');
  });
  
})
.then((value)=>
{
  console.log(value);
  return new Promise((resolve)=>
  {
    loadCart(()=>{
      resolve('Hey Everyone');
    })
  }) ;
}).then(()=>
{
  renderOrderSummary();
  renderPaymentSummary();
});

*/


//nested callbacks
/*
loadProduct(()=>

{
  loadCart(()=>
  {

    renderOrderSummary();
  renderPaymentSummary();
  });
  
});
*/

