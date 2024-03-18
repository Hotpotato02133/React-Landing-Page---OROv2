import React from 'react';
import { ImageCarousel, InfoSection, Pricing } from '../../components';
import { homeObjOne, homeObjThree, homeObjTwo, homeObjFour} from './HomeData';


const Home = () => {
    const lightBg = true;

    return (
        <>
            <InfoSection lightBg={lightBg} {...homeObjOne} />
            <InfoSection {...homeObjThree} />
            {/* <InfoSection {...homeObjTwo} /> */}
            <Pricing />
            <ImageCarousel />
            <InfoSection {...homeObjTwo} />
            <InfoSection {...homeObjFour} />
        </>
    )
}

export default Home;