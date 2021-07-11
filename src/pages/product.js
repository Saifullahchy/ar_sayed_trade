import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProductList from '../components/ProductCard'
const productPage = () => {
    return (
        <div>
            <Navbar/>
            <ProductList/>
            <Footer/>
        </div>
    )
}

export default productPage