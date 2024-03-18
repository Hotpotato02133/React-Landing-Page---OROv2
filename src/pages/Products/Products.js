import React from 'react';
import { InfoSection } from '../../components';
import { homeObjOne, homeObjTwo } from './ProductsData';

function Products() {
  return (
    <>
      <InfoSection primary {...homeObjOne} />
      <InfoSection primary {...homeObjTwo} />
    </>
  );
}

export default Products;