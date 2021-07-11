import styled from "styled-components";



export const ContainerMain = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background:#27A4B2 ;

    @media screen and (max-width: 480px){
        flex-direction: column;
        align-items:center;
    }
`

export const Container = styled.div`

    display: flex;
    position: relative;
    width: 70%;
    height: 100%;
    margin: 10px auto;
    padding: 50px 0 0 ;
    box-sizing: border-box;
    flex-wrap: wrap;
    

`
export const ProductCard = styled.div` 
   padding: 10px auto;
   display: flex;
   background:#FFf ;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   width: 280px;
   height: 400px;
   margin: 0 auto;
   margin-bottom: 20px;
   border-radius: 5px;
   cursor: pointer;
   box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2 ease-in-out;
        cursor: pointer;
    }

   @media screen and (max-width: 480px){

        padding: 10px auto;
   }
    

`
export const CardImage = styled.img`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    margin-bottom: 10px;
`
export const CardHeader = styled.div`
    border-top: 10px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

`
export const ProductHeading = styled.h1`
     font-size: 2.5rem;
     margin-top:20px;
     text-transform:uppercase;
    color: #fff;
    margin-bottom: 50px;

    @media screen and (max-width: 480px){
        font-size: 2rem;
        text-align:center;

    }
`
export const ProductH1 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
    @media screen and (max-width: 480px){
        font-size: 2rem;
        text-align:center;
    }
    text-transform: uppercase;
`
export const ProductP = styled.p`

    font-size:1rem;
    text-align: center;
    margin-bottom: 20px;
    padding: 5px;
`