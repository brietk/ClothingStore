import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from './../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import './header.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

//functional component

const Header = ({ currentUser, hidden }) => (
  <div className='header'>
    <Link className='logo-container' to="/">
      <Logo className='logo'/>
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/contact'>
        CONTACT
      </Link>
      {
        //option to SIGN OUT if there is a currentUser. If no currentUser then null -> false.
        currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
        ) : (
          <Link className='option' to='/signin'>
            SIGN IN
        </Link>
        )
      }
      <CartIcon/>
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

//our reducer stores the currentUser value, that gets passed
//into our header with mapStateToProps.
const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser, 
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);