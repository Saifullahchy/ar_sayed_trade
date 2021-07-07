import React from 'react'
import Icon1 from '../../images/service1.svg'
import Icon2 from '../../images/service2.svg'
import Icon3 from '../../images/service3.svg'
import { ServicesContainer,
         ServicesH1,
        ServicesH2,
        ServicesP,
        ServicesCard,
        ServicesIcon,
        ServicesWrapper } from './ServicesElements'

const Services = () => {
    return (
        <ServicesContainer id="services"> 
            <ServicesH1> OUR SERVICES</ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src= {Icon1}/>
                        <ServicesH2>HIGHEST STANDARDS</ServicesH2>
                        <ServicesP>You can trust that there has been no compromises throughout the cold chain process to give you a high quality end product. 
                        </ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src= {Icon2}/>
                        <ServicesH2>TRANSPARENCY</ServicesH2>
                        <ServicesP>We focus has always been on export of live & fresh seafood. Through the last two decades. We stand by our mission to deliver quality seafood.
                        </ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src= {Icon3}/>
                        <ServicesH2>TRUST</ServicesH2>
                        <ServicesP>You can trust us to deliver you the best; finest and freshest quality of seafood from India without compromise. We give you the best packaging – all food grade compliant.
                        </ServicesP>
                    </ServicesCard>
                </ServicesWrapper>
           
        </ServicesContainer>
    )
}

export default Services
