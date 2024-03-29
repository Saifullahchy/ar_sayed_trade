import react, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import product_card from "../ProductCard/data_fruits";
import "./indexElements.css";
import { Button } from "../ButtonElements";

export default class ProductCarousel extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 3000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <div className="ContainerMain" id="ProductsSection">
        <h1 className="ProdductHeading"> Fresh Fruit</h1>
        <div className="Container">
          <Slider {...settings}>
            {product_card.map((item) => (
              <div className="ProductCard" key={item.id}>
                <img src={item.thumb} alt="" className="CardImage" />
                <div className="CardHeader">
                  <h1 className="ProductTitle">{item.product_name}</h1>
                  <p className="ProductP">{item.description}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="BtnWrapper">
          <Button onClick={(event) => (window.location.href = "/products")}>
            Load More
          </Button>
        </div>
      </div>
    );
  }
}
