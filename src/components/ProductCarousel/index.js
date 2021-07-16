import React from 'react'
import product_card from '../ProductCard/Data'
import TouchCarousel from 'react-touch-carousel'
import NonPassiveTouchTarget from '../NonPassiveTouchTarget'
import {Container,
    ProductCard,
    CardImage,
    CardHeader,
    ProductH1,
    ProductP,} from "./ProductCarouselElements" 
    
const cardSize = 300
const cardPadCount = 2


function CarouselContainer (props) {
  // render the carousel structure
  const { cursor, carouselState, ...rest } = props
  const translateY = (cursor - cardPadCount) * cardSize
  
}

function renderCard (index, modIndex, cursor) {
  const item = product_card[modIndex]
   retun (const listItem = product_card.map((item) => 
        <ProductCard className="card" key ={item.id}>
            <CardImage src={item.thumb}/> 
            <CardHeader>
                <ProductH1>{item.product_name}</ProductH1>
                <ProductP>{item.description}</ProductP>
            </CardHeader>
        </ProductCard>
    )
   )
  // render the item
}

const ProductCarousel = () => {
    console.log(product_card)
    
    return (
        <TouchCarousel component={CarouselContainer}
        cardCount={product_card.length}
        cardSize={375}
        renderCard={renderCard}
        loop
        autoplay={3000}/>
            
      
    )
}

export default ProductCarousel
