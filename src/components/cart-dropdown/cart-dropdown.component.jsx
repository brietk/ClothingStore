import React from 'react';
import CustomButton from '../custum-button/custom-button.component';
import './cart-dropdown.styles.scss';

//regular stateless component

const CartDropdown = () => (
  <div className='cart-dropdown'>
    <div className='cart-items' />
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
)

export default CartDropdown;