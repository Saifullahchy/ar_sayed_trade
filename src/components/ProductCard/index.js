import React from 'react'
import { Container,
        ProductCard,
        CardImage,
        CardHeader,
        ProductH1,
        ProductP,
        ContainerMain,
        ProductHeading
} from './ProductCardElements'
import product_card from './Data'

const ProductList = () => {

    console.log(product_card)
    const listItem = product_card.map((item) => 
        <ProductCard className="card" key ={item.id}>
            <CardImage src={item.thumb}/> 
            <CardHeader>
                <ProductH1>{item.product_name}</ProductH1>
                <ProductP>{item.description}</ProductP>
            </CardHeader>
        </ProductCard>
    )
    return (
        
        <ContainerMain>
           <ProductHeading>Our Products</ProductHeading>
        <Container className="Main_content">
            {listItem}
        </Container>
        </ContainerMain>
    )
}

export default ProductList
