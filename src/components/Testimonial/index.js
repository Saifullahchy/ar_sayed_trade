import React from 'react'
import img from "../../images/testimonial/1.jpeg"
import { ServicesContainer,
        	ServicesH1,
            ServicesWrapper,
            ServicesIcon,
            ServicesH2,
            ServicesP,
            ServicesCard
} from './TestimonialElemets'

const Testimonial = () => {
    return (
        <ServicesContainer id="services"> 
            <ServicesH1> Testimonial</ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>

                        <ServicesIcon src= {img}/>
                        
                        <ServicesP>“As we tread through unchartered economic territory, being able to draw on the wisdom of other CEOs on similar journeys and having CEO Global Network helping with the navigation is extremely helpful.”
                        </ServicesP>
                        <ServicesH2>Sayed Ullah Hasan Tareq | <span >CEO</span></ServicesH2>
                    </ServicesCard>
                   
                </ServicesWrapper>
           
        </ServicesContainer>
    )
}

export default Testimonial
