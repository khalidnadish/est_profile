import React, { useRef,useState } from "react";
import styled from "styled-components";
import Map from "../img/map.png";
import Phone1 from "../img/phone.png";
import Send from "../img/send.png";
import contactus from "../img/contact.svg";
import emailjs from '@emailjs/browser';
import Notify from "./Notify";
import { db } from "../components/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";


const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  color: #000;

  @media only screen and (max-width: 480px) {
    width: 100%;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    
  }
`;

const Wrapper = styled.div`
   position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (min-device-width: 480px) and (max-device-width: 767px) {
    flex-direction: column;
  }
  
`;

const FormContainer = styled.div`
  width: 100%;
  @media only screen and (max-width: 480px) {
    width: 300px;
    
  }
`;

const Title = styled.h4`
  font-weight: 700;
  margin-top: 0;
  @media only screen and (max-width: 480px) {
    margin: 20px;
  }
`;

const Form = styled.form`
  /* height: 250px; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
    
  }
`;

const LeftForm = styled.div`
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  gap: 10px;
  width: 90%;
  /* margin-right: 20px; */
  @media only screen and (max-width: 480px) {
    height: 50%;
    width: 100%;
    padding:10px;
    /* margin-right: 0; */
   
  }
`;

 

const Input = styled.input`
  width: 100%;
  padding: 7px;
  border-radius: 8px;
  outline: none;
  border: .5px solid #000000;
  @media only screen and (max-width: 480px) {
    padding: 5px;
    width: 280px;
    padding: 10px 20px 10px 10px;
    margin: auto;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 60%;
  padding: 7px;
  border-radius: 8px;
  outline: none;
  border: .5px solid #000000;
  @media only screen and (max-width: 480px) {
    padding: 5px;
    margin-top: 20px;
    width: 280px;
    padding: 10px 20px 10px 10px;
    margin: auto;
  }
`;

const Button = styled.button`
  border: none;
  padding: 5px;
  background-color: darkblue;
  color: white;

  border-radius: 10px;
  margin-top: 5px;
  width: 100%;
  cursor: pointer;
  @media only screen and (max-width: 480px) {
    padding: 5px;
  }
`;

const AddressContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
 
  @media only screen and (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    margin-top: 20px;
  }
`;

const AddressItem = styled.div`
  display: flex;
   
  align-items: center;
  margin-top: 10px;
  @media only screen and (max-width: 480px) {
    margin-bottom: 20px;
  }
`;

const Icon = styled.img`
  width: 20px;
  margin-right: 20px;
  @media only screen and (max-width: 480px) {
    width: 15px;
  }
`;
const Iconx = styled.img`
  width: 40%;
  margin-right: 20px;
  @media only screen and (max-width: 480px) {
    width: 15px;
  }
`;

const ImageWraper = styled.div`
  width: 100%;
  height: auto;
  position: absolute;
  right: 0px;
  top: 0;
  z-index: 0;

  @media only screen and (max-width: 480px) {
    /* display: none; */
  }
`;
const Text = styled.span`
  width: 100%;

  margin-right: 15px;
  @media only screen and (max-width: 480px) {
  }
`;



const Contact = () => {
  const [open,setOpen]= useState(false)
  const [userName,setUserName]= useState("")
  const [email,setEmail]= useState("")
  const [Phone,setPhone]= useState("")
  const [price,setPrice]= useState("")
  const [message,setMessage]= useState("")

  const loginCollection = collection(db, "mail");


  const form = useRef();
 

  const sendEmail = async(e) => {
    e.preventDefault();
    await addDoc(loginCollection, {
      from_name: userName,
      email: email,
      Phone: Phone,
      price: price,
      message: message,
    });


    emailjs.sendForm('service_rblfohz', 'template_g08pj8y', form.current, 'f_usxabourLw8GelU')
      .then((result) => {
        setOpen(true)
         
      }, (error) => {
          // console.log(error.text);
      });
  };
 
  return (
    <Container id="contact">
      <Wrapper>
        {/* <ImageWraper>
          <Iconx src={contactus} />
        </ImageWraper> */}

        <FormContainer>
          <Form ref={form} onSubmit={sendEmail}>
              <Title>ننتظرك لا تتردد</Title>
            <LeftForm>
              <Input placeholder="الاسم"  name="from_name" id="from_name" value={userName} onChange={(e)=>setUserName(e.target.value)}/>

              <Input placeholder="الايميل" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>

              <Input placeholder="الجوال" name="Phone" value={Phone} onChange={(e)=>setPhone(e.target.value)}/>

              <Input type="number" placeholder="السعر"  name="price" value={price} onChange={(e)=>setPrice(e.target.value)}/>
              <TextArea placeholder="ملاحظات" name="message" id="message" value={message} onChange={(e)=>setMessage(e.target.value)}/>
              <Button type="submit" value="Send">ارسال</Button>
            </LeftForm>
          </Form>
        </FormContainer>

        <AddressContainer>
          <AddressItem>
            <Icon src={Phone1} />
            <Text>051234567</Text>
          </AddressItem>
          <AddressItem>
            <Icon src={Send} />
            <Text>happyday.club.sa@gmail.com</Text>
          </AddressItem>
          
        </AddressContainer>
        {open && <Notify open={open} setOpen={setOpen} msg={`عزيزي  ${userName} شاكرين اهتمامك  `}/>}
      </Wrapper>
    </Container>
  );
};

export default Contact;





export const ContactUs = () => {
 

 
  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};
