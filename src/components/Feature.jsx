import React from "react";
import styled from "styled-components";
import App from "../img/feature.svg";
import AnimatedShapes from "./AnimatedShapes";
import data from "./feature.json";

const Container = styled.div`
min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  
  /* direction: rtl; */
 
  @media only screen and (max-width: 480px) {
    width: 100%;
    flex-direction: column;
    display: flex;
  justify-content: center;
  align-items: center;
  }
`;

const Left = styled.div`
  width: 50%;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const Image = styled.img`
  width: 100%;
  height:auto ;
`;

const Right = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-right: auto;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Title = styled.h1`
  
  margin-bottom: 30px;
  color:darkblue;
  @media only screen and (max-width: 480px) {
    width: 100%;
    font-weight: bolder;
  }
`;

const SubTitle = styled.p`
 position: relative;
  width: 100%;
  /* margin-top: 20px; */
  color: rgb(0, 0, 0);
  border-right: 3px solid darkblue;
  padding-right:10px;
  margin:.8rem;
  font-family: 'Cairo', sans-serif;
  font-weight: 300;
  line-height: 1.8rem;
  @media only screen and (max-width: 480px) {
    width: 100%;
    padding: 10px;
    margin: 10px;
    color: #000;
  }
`;

const SmallSubTitle = styled.p`
 position: relative;
  width: 100%;
  color: #777;
   
  padding-right:20px;
  font-size: 1rem;
  font-family: 'Cairo', sans-serif;
  font-weight: 300;
  line-height: 1.8rem;
  @media only screen and (max-width: 480px) {
    width: 100%;
    padding: 10px;
    margin: 10px;
    color: #000;
  }
`;

const Desc = styled.p`
  font-size: 20px;
  color: #777;
  margin-top: 30px;
  margin-right:5rem;
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


 

const Feature = () => {
  return (
    <Container id="feature">
     
      <Right>
        <Title>{data[0].FeatureTitle}
        <SmallSubTitle>{data[0].FeatureDesc}</SmallSubTitle>
        </Title>
        <SubTitle>{data[0].FeatureSubTitle2}</SubTitle>
        <SubTitle>{data[0].FeatureSubTitle1}</SubTitle>
        <SubTitle>{data[0].FeatureSubTitle3}</SubTitle>
        <SubTitle>{data[0].FeatureSubTitle4}</SubTitle>
        <SubTitle>{data[0].FeatureSubTitle5}</SubTitle>
        <SubTitle>{data[0].FeatureSubTitle6}</SubTitle>
        <SubTitle>{data[0].FeatureSubTitle7}</SubTitle>
         
        {/* <Desc>
        {data[0].FeatureDesc}
        </Desc>
        <Desc>
        {data[0].FeatureDesc1}
        </Desc> */}
       
      </Right>
      <ImageWraper>
        <Image src={App} />
      </ImageWraper>
     
    </Container>
  );
};

export default Feature;
