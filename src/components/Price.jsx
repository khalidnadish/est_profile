import React from "react";
import styled from "styled-components";
import PriceCard from "./PriceCard";
import pkg from "./pakage.json";
import App from "../img/price.svg";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1em;
  padding: 20px;
  color: #000;
  @media screen and (max-device-width: 480px) {
    width: 100%;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
`;

const Image = styled.img`
  width: 80%;
`;

const ImageWraper = styled.div`
  width: 200px;
  height: 200px;
  @media only screen and (max-width: 480px) {
    width: 100px;
    height: auto;
  }
`;

const PriceWraper = styled.div`
display: flex;
  justify-content: center;
  align-items: flex-start;
  
  @media only screen and (max-width: 480px) {
    width: 100%;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
`;
const Title = styled.h1``;

const Price = () => {
  return (
    <Container id="price">
      <Title>الاسعار</Title>
      <PriceWraper>
        <PriceCard price="10" type={pkg[0].pkg} dtl={pkg[0].dtl}/>
        <PriceCard price="20" type={pkg[2].pkg} dtl={pkg[2].dtl}/>
        <PriceCard price="30" type={pkg[1].pkg} dtl={pkg[1].dtl}/>
      </PriceWraper>
      {/* <ImageWraper>
        <Image src={App} />
      </ImageWraper> */}
    </Container>
  );
};

export default Price;
