import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import './collection-preview.styles.scss';

//this is a functional component

const CollectionPreview = ({ title, routeName, items }) => (
  <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <h2 className='routeName'>{routeName}</h2>
    <div className='preview'>
      {//show only 4 items in each collection
        items
          .filter((item, idx) => idx < 4)
          .map((item) => (
              <CollectionItem key={item.id} item={item} />
          ))
      }
    </div>
  </div>
);

export default CollectionPreview;