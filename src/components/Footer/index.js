import React from "react";
import { animateScroll as scroll } from "react-scroll";
import logo from "../../images/logo.png";
// import {DialPad} from 'frh-react-dial-pad'
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLink,
  FooterLinkItems,
  FooterLinksConatiner,
  FooterLinksTitle,
  FooterLinksWrapper,
  SocialIcon,
  SocialIconLink,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
} from "./FooterElemets";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksConatiner>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinksTitle> About Us </FooterLinksTitle>
              <FooterLink to="/contactus">About us</FooterLink>
              <FooterLink to="/products">Products</FooterLink>
              <FooterLink to="/contactus">Testimonials</FooterLink>
              <FooterLink to="/contactus">Terms of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinksTitle> Videos </FooterLinksTitle>
              <FooterLink to="/contactus">Submit Video</FooterLink>
              <FooterLink to="/contactus">Ambassadors</FooterLink>
              <FooterLink to="/contactus">Agency</FooterLink>
              <FooterLink to="/contactus">Influencer</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinksTitle> Office </FooterLinksTitle>
              <FooterLink to="/contactus">
                25/11 Somobai Somity Market (2nd Floor) Fishery Ghat, Iqbal
                Road, Patherghata Chittagong{" "}
              </FooterLink>
              <FooterLink to="/">Mobile: +8801707026633</FooterLink>
              <FooterLink to="/">Whatsapp: +971521684855</FooterLink>
              <FooterLink to="/contactus">
                Email: arsayedtrade@gmail.com
              </FooterLink>
              <FooterLink to="/contactus"></FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinksTitle> Social Media </FooterLinksTitle>
              <FooterLink to="/">Facebook</FooterLink>
              <FooterLink to="/">Instagram</FooterLink>
              <FooterLink to="/">Twitter</FooterLink>
              <FooterLink to="/">Youtube</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksConatiner>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo onClick={toggleHome}>
              <img src={logo} height="40px" width="150px" alt="Logo" />
            </SocialLogo>
            <WebsiteRights>
              {" "}
              A.R Sayed Trade Internationl © {new Date().getUTCFullYear()} All
              rights Reserved.{" "}
            </WebsiteRights>
            <SocialIcon>
              <SocialIconLink href="/" target="_balnk" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="_balnk" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.facebook.com/westfordbd/"
                target="_balnk"
                aria-label="Youtube"
              >
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href="/" target="_balnk" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.linkedin.com/company/79700557"
                aria-label="Linkdin"
              >
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcon>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
      <div
        style={{
          color: "#ffffff",
          marginLeft: "25px",
          fontSize: "12px",
          paddingBottom: "20px",
        }}
      >
        Developed by{" "}
        <span>
          <a
            href="https://dellly.com/"
            target="_blank"
            style={{ color: "red", textDecoration: "none" }}
          >
            dellly.com
          </a>
        </span>
      </div>
    </FooterContainer>
  );
};

export default Footer;
