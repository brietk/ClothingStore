import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
});

//make a new action
//its a function that gets the item that we want add to the array that we just made. 
//it will return a new action type object.
export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});