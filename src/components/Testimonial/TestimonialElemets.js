import styled from "styled-components";

export const ServicesContainer = styled.div`
    height: 700px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;

    @media screen and (max-width: 768px){
        height: 900px;
    }
    
    @media screen and (max-width: 480px){
        height: 700px;
    }
    
`

export const ServicesWrapper = styled.div`
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 50px;

    .slick-slider,
    .slick-list,
    .slick-track {
        height: 100%;
    }

    .slick-slide > div {
        display: flex;
        justify-content: center;
    }

    .slick-dots {
        bottom: -35px;
    }

    .slick-dots li button:before {
        color: #28ABB9;
        font-size: 10px;
        opacity: 0.4;
    }

    .slick-dots li.slick-active button:before {
        color: #28ABB9;
        opacity: 1;
    }

    @media screen and (max-width: 768px){
        padding: 0 20px;
    }
`

export const ServicesCard = styled.div`
    width: 100%;
    background: #28ABB9;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    border-radius: 10px;
    min-height: 430px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;
    text-align: center;
    box-sizing: border-box;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2 ease-in-out;
        cursor: pointer;
    }

    @media screen and (max-width: 480px){
        min-height: 500px;
        padding: 24px 18px;
    }
`

export const ServicesIcon = styled.img`
    height: 160px;
    width: 160px;
    flex: 0 0 160px;
    align-self: center;
    border-radius: 50%;
    margin: auto;
    margin-bottom: 16px;
    padding: 2px;
    background:#fff ;
    object-fit: cover;
    object-position: center;
`

export const ServicesContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`

export const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    color: #28ABB9;
    margin-bottom: 50px;
    text-transform: uppercase;

    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`

export const ServicesH2 = styled.p`
    font-size: 0.7rem;
    margin: 20px 0 10px;
    text-transform: initial;
    color: #fff;
    text-transform: uppercase;
` 

export const ServicesP = styled.p`
    font-size:1.5rem;
    text-align: center;
    color: #fff;
      letter-spacing: 1px;
      font-family: 'Raleway', sans-serif;
      max-width: 650px;
      margin: 0;

    @media screen and (max-width: 480px){
        font-size: 1.1rem;
    }
    
`
