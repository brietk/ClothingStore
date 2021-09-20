import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custum-button/custom-button.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import './cart-dropdown.styles.scss';

//regular stateless component

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.length ? (
      cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem}/>
      ))
    ) : (
        <span className='emty-message'>Your cart is emty</span>
      )
    }
    </div>
    <CustomButton 
      onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartHidden());
      }}
        >Go to CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector ({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));