import React from 'react'
import MainSection from '../../MainSection'
import Pricing from '../../Pricing'
import {homeObjOne, homeObjTwo, homeObjThree, homeObjFour} from './Data'
//import { ReactComponent as Svg } from '../../../images/svg-1.svg';

function Home() {
    return (
        <>
            <MainSection {...homeObjOne}/>
            <MainSection {...homeObjTwo}/>
            <MainSection {...homeObjThree}/>
            <Pricing />
            <MainSection {...homeObjFour}/>
        </>
    )
}

export default Home
