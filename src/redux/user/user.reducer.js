import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
  currentUser: null
}

//a function that gets a state object and an action.
const userReducer = (state = INITIAL_STATE, action) => {
  //depending on what the action is
  switch (action.type) {
    //checks if the action type is equal to set_curr
    case UserActionTypes.SET_CURRENT_USER:
      //than the new object gets returned.
      return {
        ...state,
        currentUser: action.payload
      }
    //if no match, return as it is.
    default:
      return state;
  }
};

export default userReducer;