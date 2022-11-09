import React, { useState } from "react";
import styled from "styled-components";
import How from "../img/sevice.svg";
import MiniCard from "./MiniCard";
import Play from "../img/play.png";
import data from "./service.json";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
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
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 480px) {
    padding: 20px;
    width: 100%;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Title = styled.h1``;

const Desc = styled.p`
  /* margin-top: 20px; */
  color: #6e6969;
  width: fit-content;

  margin-right: 50px;
  font-family: 'Cairo', sans-serif;
  font-weight: lighter;
  line-height: 1.8rem;
  font-size: 1rem;
 @media only screen and (max-width: 480px) {
    width: 100%;
    margin-right: 5px;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 50px;
  margin-top: 50px;
  flex-wrap: wrap;
  @media only screen and (max-width: 480px) {
    width: 100%;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  /* gap: 50px; */

  @media only screen and (max-width: 480px) {
    width: 100%;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Icon = styled.img`
  width: 20px;
  margin-right: 10px;
`;

const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const CloseButton = styled.button`
  position: absolute;
  background-color: white;
  padding: 5px;
  border: none;
  border-radius: 5px;
  right: 5px;
  top: 30%;
`;

const ImageWraper = styled.div`
  width: 100%;

  @media only screen and (max-width: 480px) {
    width: 100px;
    /* height: 100px; */
    order: -1;
  }
`;

const Image = styled.img`
  width: 30%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 480px) {
    width: 100%;
    height: auto;
    /* margin: auto; */

    align-items: center;
    justify-content: center;
  }
`;

const HeaderWraper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media only screen and (max-width: 480px) {
    width: 100%;

    flex-direction: column;
    justify-content: flex-start;
    order: -1;
  }
`;

const Service = () => {
  const [open, setOpen] = useState(false);
  const smallScreen = window.screen.width <= 480 ? true : false;
  return (
    <Container id="service">
      <Wrapper>
        <HeaderWraper>
          <TitleContainer>
            <Title>{data[0].ServiceTitle}</Title>
            <Desc>{data[0].ServiceSubTitle}</Desc>
          </TitleContainer>

          <ImageWraper>
            <Image open={open} src={How} />
          </ImageWraper>
        </HeaderWraper>

        <CardContainer>
          <MiniCard
            title={data[0].cardTitle1}
            detail={data[0].cardD1}
            sts={"خصم 50%"}
            color="green"
          />
          <MiniCard
            title={data[0].cardTitle16}
            detail={data[0].cardD1}
            sts={"مجاني"}
          />
          <MiniCard
            title={data[0].cardTitle2}
            detail={data[0].cardD1}
            sts={"مجاني"}
          />
          <MiniCard
            title={data[0].cardTitle3}
            detail={data[0].cardD1}
            sts={"مجاني"}
          />
          <MiniCard
            title={data[0].cardTitle4}
            detail={data[0].cardD1}
            sts={"مجاني"}
          />
          <MiniCard
            title={data[0].cardTitle5}
            detail={data[0].cardD1}
            sts={"مجاني"}
          />
          <MiniCard
            title={data[0].cardTitle6}
            detail={data[0].cardD1}
            sts={"مجاني"}
          />
          <MiniCard
            title={data[0].cardTitle7}
            detail={data[0].cardD1}
            sts={"مجاني"}
          />
          <MiniCard
            title={data[0].cardTitle8}
            detail={data[0].cardD1}
            sts={"مجاني"}
          />
          <MiniCard
            title={data[0].cardTitle9}
            detail={data[0].cardD1}
            sts={"مجاني"}
          />
          {/* <MiniCard
            title={data[0].cardTitle10}
            detail={data[0].cardD1}
            sts={"مجاني"}
          /> */}
          <MiniCard
            title={data[0].cardTitle11}
            detail={data[0].cardD1}
            sts={"مجاني"}
          />
          <MiniCard
            title={data[0].cardTitle12}
            detail={data[0].cardD1}
            sts={"مجاني"}
          />
          <MiniCard
            title={data[0].cardTitle13}
            detail={data[0].cardD1}
            sts={"مجاني"}
          />
          <MiniCard
            title={data[0].cardTitle14}
            detail={data[0].cardD1}
            sts={"مجاني"}
          />
          <MiniCard
            title={data[0].cardTitle15}
            detail={data[0].cardD1}
            sts={"مجاني"}
          />
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Service;
