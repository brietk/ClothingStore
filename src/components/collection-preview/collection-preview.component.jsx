import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import './collection-preview.styles.scss';

//this is a functional component

const CollectionPreview = ({ title, items }) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {//show only 4 items in each collection
                items
                    .filter((item, idx) => idx < 4)
                    .map(({id, ...otherItemProps}) => (
                        <CollectionItem key={id} {...otherItemProps}/>
                ))
            }
        </div>
    </div>
);

export default CollectionPreview;