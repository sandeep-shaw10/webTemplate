import React from 'react';
import MainSection from '../../MainSection';
import { homeObjOne, homeObjTwo} from './Data';
//import Pricing from '../../Pricing';

function Products() {
  return (
    <>
      <MainSection {...homeObjOne} />
      <MainSection {...homeObjTwo} />
    </>
  );
}

export default Products;