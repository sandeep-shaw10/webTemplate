import React from 'react';
import MainSection from '../../MainSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import Pricing from '../../Pricing';

function Services() {
  return (
    <>
      <Pricing />
      <MainSection {...homeObjOne} />
      <MainSection {...homeObjThree} />
    </>
  );
}

export default Services;