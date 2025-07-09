import React, { useState } from "react";
import Video from "../../videos/video1.mp4";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
import { Button } from "../ButtonElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" playsInline />
      </HeroBg>
      <HeroContent>
        <HeroH1>WELCOME TO</HeroH1>
        <HeroH1>A.R SAYED TRADE INTERNATIONAL </HeroH1>
        <HeroP>
          We A.R SAYED TRADE INTERNATIONAL are importers, exporters and
          Wholesale suppliers of frozen, fresh and dried seafood and fruits
          company since last 5 years, under the supervision of Sayed Ullah Hasan
          Tareq. We are Importing from India, China, Vietnam, Indonesia, India,
          Pakistan, Myanmar, Argentina, Uruguay, Japan, Paraguay, UAE, Oman,
          USA, Egypt and Bahrain. We Import and export frozen, fresh and dry
          seafood and fruits to Bangladesh from, Egypt, USA, Yemen, Paraguay and
          distributing within Bangladesh.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            Link
            to="about"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            activeClass="active"
          >
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
