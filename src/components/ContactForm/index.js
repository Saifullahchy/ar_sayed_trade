import React from 'react'
import { Container,
        FromWrap,
        Image,
        FormContent,
        From,
        FromH1,
        FromInput,
        FromLabel,
        FromButton,
        ImageContaienr

 } from './ContactFormElements'
 import logo from '../../images/logo.png'
 import emailjs from 'emailjs-com';
 import img from '../../images/contact.svg'

const ContactForm = () => {
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_jyyam8t', 'template_s51muwt', e.target, 'user_MMinMhYE7GW1pJWV5zQS8')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }
    return (
        <>
         <Container id = "contactus">
             <FromWrap>
                <FromH1>Contact Us</FromH1>
                <FormContent className="FromContainer">
               <ImageContaienr>
                <Image src ={img}/>
                </ImageContaienr>
                 <From action="#" onSubmit={sendEmail}>
                     <FromLabel htmlFor='for' name='email'>Email</FromLabel>
                     <FromInput type='email' reauired/>
                     <FromLabel htmlFor='for' name='text'>Mobile No</FromLabel>
                     <FromInput type='text' reauired/>
                     <FromLabel htmlFor='for' name='message'>Message</FromLabel>
                     <FromInput type='text'  />
                     <FromButton type='submit' value="Send">Submit</FromButton>
                     {/* <BackLink Link to ='/'>Back To Website</BackLink> */}
                 </From>
                 </FormContent>
             </FromWrap>
         </Container>
        </>
    )
}

export default ContactForm
