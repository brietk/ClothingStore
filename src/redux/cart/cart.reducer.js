import CartActionTypes from './cart.types';

const INITIAL_STATE = {
  hidden: true
};

//default value of an initial state
const cartReduser = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    default:
      return state;
  }
};

export default cartReduser;