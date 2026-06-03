import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img from "../../images/testimonial/1.jpeg";
import img2 from "../../images/testimonial/omarsakib.jpg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesIcon,
  ServicesContent,
  ServicesH2,
  ServicesP,
  ServicesCard,
} from "./TestimonialElemets";

const Testimonial = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 600,
  };

  const testimonials = [
    {
      id: 1,
      name: "Sayed Ullah Hasan Tareq",
      title: "CEO",
      image: img,
      description: "As we tread through unchartered economic territory, being able to draw on the wisdom of other CEOs on similar journeys and having CEO Global Network helping with the navigation is extremely helpful.",
    },
    {
      id: 2,
      name: "Omar Sakib",
      title: "COO",
      image: img2,
      description: "As we tread through unchartered economic territory, being able to draw on the wisdom of other CEOs on similar journeys and having CEO Global Network helping with the navigation is extremely helpful.",
    },
    
  ];
  return (
    <ServicesContainer id="services">
      <ServicesH1> Testimonial</ServicesH1>
      <ServicesWrapper>
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <ServicesCard key={testimonial.id}>
              <ServicesIcon src={testimonial.image} />

              <ServicesContent>
                <ServicesP>
                  {testimonial.description}
                </ServicesP>
                <ServicesH2>
                  {testimonial.name} | <span>{testimonial.title}</span>
                </ServicesH2>
              </ServicesContent>
            </ServicesCard>
          ))}
        </Slider>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Testimonial;
