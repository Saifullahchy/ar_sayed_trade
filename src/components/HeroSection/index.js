import React, {useState} from 'react';
import Video from '../../videos/video1.mp4';
import {HeroContainer,
     HeroBg,
     VideoBg,
     HeroContent,
     HeroH1,
     HeroP,
     HeroBtnWrapper,
     ArrowForward,
     ArrowRight} from './HeroElements';
import {Button} from '../ButtonElements';
import { Link } from 'react-router-dom';


const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer >

            <HeroBg>
                <VideoBg autoPlay loop muted src= {Video} type="video/mp4"/>
            </HeroBg>
            <HeroContent>
                <HeroH1>WELCOME TO</HeroH1>
                <HeroH1>A.R SAYED TRADE INTERNATIONAL </HeroH1>
                <HeroP>
                We A.R SAYED TRADE INTERNATIONAL are importers, exporters and Wholesale suppliers of frozen, fresh and dried seafood Company since last 15 years, under the supervision of Mr. Omar Sakib. We are Importing from India, China, Vietnam, Indonesia, India, Pakistan, Myanmar, Argentina, Uruguay, Japan, Paraguay, UAE, Oman and Bahrain.
                We Import and export frozen, fresh and dry seafood to Bangladesh Yemen, Paraguay and distributing within Bangladesh.
                </HeroP>
                <HeroBtnWrapper>
                    <Button Link to="about" onMouseEnter={onHover} 
                    onMouseLeave = {onHover}
                    primary = 'true'
                    dark = 'true'>
                        Get Started {hover ? <ArrowForward/> :<ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
            
        </HeroContainer>
    )
}

export default HeroSection
