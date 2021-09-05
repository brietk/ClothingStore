//To prevent duplicates in cart.
//Check if there are items in cartItemToAdd already in cartItems.
export const addItemToCart = (cartItems, cartItemToAdd) => {
  //looks for existingItem
  //find retuns the first item found based on the condition we put in
  const existingCartItem = cartItems.find(
    //each item. Checks id. if match to the id of item we add.
    cartItem => cartItem.id === cartItemToAdd.id //the condition
  );
  //if nothing is found the existingCartItem will be undifined

  //if existingCartItem does exist then we need a new array.
  //.map() returns a new array.
  //we need that so our component knows to rerender properly

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
      //if two items are the same, than we need a new object.
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
      //if no two items are the same we return nothing new.   
        : cartItem
      )
  }

  //if the cartItem is not found inside of our array. We want ot return a new
  //array with all the existing items + an object witch is equal to our
  //cartItemToAdd exept we are going to give it a base quantity of 1. 
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
};