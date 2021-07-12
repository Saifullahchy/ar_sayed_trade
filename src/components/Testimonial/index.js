import React from 'react'
import { TestimonialContainer,
         TestimonailWrapper,
         TestimonialH1,
         TestimonialCard,
         ImageHead,
         TestimonialDes,
         Authoer
} from './TestimonialElemets'

const Testimonial = () => {
    return (
        <TestimonialContainer>
            <TestimonailWrapper>
                <TestimonialH1>Testimonial</TestimonialH1>
                <TestimonialCard>
                    <ImageHead src="" alt=""/>
                    <TestimonialDes>This is description</TestimonialDes>
                    <Authoer></Authoer>
                </TestimonialCard>
            </TestimonailWrapper>
        </TestimonialContainer>
    )
}

export default Testimonial
