import React from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
//has to be a class component because we have to store the data related to the collections


class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }

    //render out all the information
    render() {
        //destructure our collection
        //const {collections} = this.state;

        return (<div className='shop-page'>
            {
                this.state.collections.map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview key={id} {...otherCollectionProps}/>
                ))
            }
        </div>);
    }
}

export default ShopPage;