import React from "react";
import styled from "styled-components";
import Woman from '../img/goal.svg'
import AnimatedShapes from "./AnimatedShapes";
import data from "./intro.json";

const Container = styled.div`
min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
   width: 100%;
 
  
   @media only screen and (max-width: 480px) {
     width: 100%;
    
     flex-direction:column;
  }
`;

const Left = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  @media only screen and (max-width: 480px) {
    width: 100%;
    padding: 10px;
     
    margin: 10px;
  }
`;

const Title = styled.h1`
  width: 100%;
  color: #000;
  margin: auto;
 
  @media only screen and (max-width: 480px) {
    width: 100%;
    font-weight: bolder;
  }
`;

const Desc = styled.h4`
 position: relative;
  width: 100%;
  margin-top: 20px;
  color: rgb(0, 0, 0);
  border-right: 3px solid red;
  padding-right:10px;
  margin-right:5rem;
  @media only screen and (max-width: 480px) {
    width: 100%;
    padding: 10px;
    margin: 10px;
    color: #000;
  }
`;

const Info = styled.div`
  width: 100%;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 480px) {
    width: 100%;
    flex-direction: column;
  }
`;


const Contact = styled.div`
  display: flex;
  flex-direction: column;
`;

const Phone = styled.span`
  color: #f0667d;
  font-weight: bold;
`;

const ContactText = styled.span`
  color: gray;
  margin-top: 5px;
`;

const ImageWraper = styled.div`
display: flex;
  width: 30%;
  height: 400px; 
  
  @media only screen and (max-width: 480px) {
    width: 100px;
  height: 100px;
  order: -1;
   
  }
`;

const IntroDesc = styled.p`
 position: relative;
  width: 100%;
  margin-top: 20px;
  color: rgb(0, 0, 0);
  font-family: 'Cairo', sans-serif;
  font-weight: 300;
  line-height: 1.9rem;
  /* border-right: 3px solid red; */
  padding-right:10px;
  margin-right:5rem;
  @media only screen and (max-width: 480px) {
    width: 100%;
    padding: 10px;
    margin: 10px;
    color: #000;
  }
`;

const SubIntroDesc = styled.p`
 position: relative;
  width: 100%;
  margin-top: 20px;
  color: rgb(0, 0, 0);
  border-right: 20px solid red;
  line-height: 22px;
  /* border-left: 20px solid red; */
  border-radius: 15px;
  padding-right:10px;
  padding-left:10px;
  margin-right:5rem;
  /* float:left; */

  @media only screen and (max-width: 480px) {
    width: 100%;
    padding: 10px;
    margin: 10px;
    color: #000;
  }
`;




const Image = styled.img`
    width: 100%;
    height: auto;
`
 
const Intro = () => {
  return (
    <Container id="home">
      <Left>
        <Title>{data[0].IntroTitle} </Title>
        <IntroDesc>{data[0].IntroDesc}  </IntroDesc>

        <SubIntroDesc>{data[0].subIntro0}  </SubIntroDesc>
        <IntroDesc>{data[0].subIntroData0}  </IntroDesc>

        <SubIntroDesc>{data[0].subIntro1}  </SubIntroDesc>
        <IntroDesc>{data[0].subIntroData1}  </IntroDesc>

        <SubIntroDesc>{data[0].subIntro2}  </SubIntroDesc>
        <IntroDesc>{data[0].subIntroData2}  </IntroDesc>
        <SubIntroDesc>{data[0].subIntro3}  </SubIntroDesc>
        <IntroDesc>{data[0].subIntroData3}  </IntroDesc>
        
     
    

        {/* <Desc>{data[0].intreDes1}  </Desc>
        <Desc> {data[0].intreDes4} </Desc>
        <Desc>{data[0].intreDes2} </Desc>
        <Desc> {data[0].intreDes3} </Desc>
        <Desc>{data[0].intreDes5}</Desc>   
        
        <Desc>{data[0].intreDes6}</Desc>
        <Desc> {data[0].intreDes7} </Desc> */}

       
        
        <Info>
          <Contact>
            <Phone>{data[0].Phone}</Phone>
            <ContactText>{data[0].ContactText}</ContactText>
          </Contact>
        </Info>
      </Left>
      <ImageWraper><Image src={Woman}/></ImageWraper>
    </Container>
  );
};

export default Intro;
