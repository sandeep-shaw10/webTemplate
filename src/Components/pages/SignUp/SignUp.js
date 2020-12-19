import React from 'react';
import MainSection from '../../MainSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';

function SignUp() {
  return (
    <>
      <MainSection {...homeObjOne} />
      <MainSection {...homeObjThree} />
    </>
  );
}

export default SignUp;