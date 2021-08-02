import styled from "styled-components";



export const ContainerMain = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background:#27A4B2 ;

    @media screen and (max-width: 480px){
        flex-direction: column;
        align-items:center;
    }
`

export const Container = styled.div`

     display: flex;
    justify-content:start;
    position: relative; 
     width: 70%;
    height: 100%;
    margin: 20px auto;
    padding: 50px 0 0 ;
    box-sizing: border-box;
    flex-wrap: wrap; 
    

`
export const ProductCard = styled.div` 
   padding: 20px auto;
   display: flex;
   background:#FFf ;
   flex-direction: column;
   width: 280px;
   height: 400px;
   margin: auto;
   margin-bottom: 20px;
   border-radius: 10px;
   cursor: pointer;
   box-shadow: 5px 10px 5px rgba(0,0,0,0.2);
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
    height: 260px;
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
    text-transform: uppercase;
`
export const ProductP = styled.p`

    font-size:1rem;
    text-align: center;
    margin-bottom: 24px;
    padding: 5px;

`