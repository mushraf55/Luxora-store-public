//code to add the cart item on localstorage
export let cart = JSON.parse(localStorage.getItem('cart'));

/* This if statement avoids the NULL error. The cart throws an error when there is no
product in localstorage of cart so this piece of code will prevent the error by adding
the default products on the cart */

if(!cart){
  cart =  [{
    productId: "aaa114",
    quantity: 2,
    deliveryOptionId: '1'
  },
  {
    productId: 'aaa121',
    quantity: 1,
    deliveryOptionId: '2'
  },
 ];
}
/*Function to save the data of cart in localStorage. When the page is refreshed the cart
quantity remains the same */

 function saveToStorage(){
  localStorage.setItem('cart', JSON.stringify(cart))
}; 

//Function to add products to cart
export function addToCart(productId) {
    let matchingItem;

    cart.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem;
      }
    });
    if (matchingItem) {
      matchingItem.quantity += 1;
    } else {
      cart.push({
        productId: productId,
        quantity: 1,
        deliveryOptionId: '1'
      });
    } 



    saveToStorage();
  };

//Function to remove product from cart
export function removeFromCart(productId){
  const newCart = [];
  cart.forEach((cartItem) => {
    if(cartItem.productId !== productId){
      newCart.push(cartItem);
    }
  });
  cart = newCart;

  saveToStorage();
};

export function updateDileveryOption (productId, deliveryOptionId) {
  let matchingItem;

    cart.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem;
      }
    });

    matchingItem.deliveryOptionId = deliveryOptionId;

    saveToStorage();
}