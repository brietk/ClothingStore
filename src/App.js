import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';
import { auth, createUserProfileDocument} from './firebase/firebase.utils';
import { setCurrentUser} from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

class App extends React.Component {

  unsubscribeFromAuth = null;

  //keeps the user signed in until he signs out
  componentDidMount() {

    //destructure because we are using the setCurrentUser more than once
    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(onSnapshot => {
          setCurrentUser({
            id: onSnapshot.id,
            ...onSnapshot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  //this will close the open subscribtion on firebase
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render () {
    return(
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route exact path='/signIn' render={() => 
          this.props.currentUser ? (
            <Redirect to='/' />
          ) : (
            <SignInAndSignUpPage />
          )
          } 
        />
      </Switch>
    </div>
  )};
}

//get current user from our redux state
const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  //calling the acction, but passing the user in
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

//connects React component to Redux store.. 
//first argument is null because we dont need any state/props from our reducer
export default connect (mapStateToProps, mapDispatchToProps)(App);
