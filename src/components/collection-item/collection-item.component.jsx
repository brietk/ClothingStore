import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custum-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';
import './collection-item.styles.scss';

//we dont need state, so it's a functional component

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
    return (
    <div className='collection-item'>
        <div 
            className='image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className='collection-footer'>
            <span className='name'>{ name }</span>
            <span className='price'>{ price }</span>
        </div>
        <CustomButton onClick={() => addItem(item)} inverted> 
            Add to cart 
        </CustomButton>
    </div>
)};

//with our new item, we know we need to create our new dispatchToProps. Because we need
//do dispatch our new item. MDTP is a function that gets a dispatch. Whenever there is
//an addItem, it will get an item in as the property of this function that will represent
//the addItem props that gets passed in. And then we will dispatch our
//addItem action creator passing the item in. 
//So all we are doing is simply: creating this function that is a prop called addItem
//that will go into our collection-item, as the addItem function 
//whenever we dispatch or call this function (addItem), the function will receve the 
//item as the property, pass it into our addItem action creator, wich gives us back
//the opject were the type is equal to addItem and the payload is equal to the item
//that gets passed in. And then we will dispatch that new opject into our store. And 
//it will go through our redux flow. 


const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);