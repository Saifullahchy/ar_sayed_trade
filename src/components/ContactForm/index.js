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
        ImageContaienr,
        FromInputText

 } from './ContactFormElements'
 import logo from '../../images/logo.png'
 import emailjs from 'emailjs-com';
 import img from '../../images/contact.svg'

const ContactForm = () => {
  
const  cancelFrom = () => {
      document.getElementById("contact_form").reset();
      console.log("on click worked")
  }
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_jyyam8t', 'template_1xt0p9n', e.target, 'user_MMinMhYE7GW1pJWV5zQS8')
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
                 <From id= "contact_form" onSubmit={sendEmail}>
                 <FromLabel htmlFor='for' >Your Name</FromLabel>
                     <FromInput type='text' reauired name="user_name"/>
                     <FromLabel htmlFor='for'>Email</FromLabel>
                     <FromInput type='email' reauired name="user_email"/>
                     <FromLabel htmlFor='for'>Mobile Number</FromLabel>
                     <FromInput type='text' name="user_contactNo" reauired/>
                     <FromLabel htmlFor='for' >Message</FromLabel>
                     <FromInputText type='text' name='user_message' />
                     <FromInput className="button" type='submit' value="Send" onclick={cancelFrom} />
                     {/* <BackLink Link to ='/'>Back To Website</BackLink> */}
                 </From>
                 </FormContent>
             </FromWrap>
         </Container>
        </>
    )
}

export default ContactForm
