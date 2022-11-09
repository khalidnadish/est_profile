import React from "react";
import styled from "styled-components";
import data from "./data.json";
import { FcHome } from "react-icons/fc";
import { ImPower } from "react-icons/im";
import { FcBriefcase } from "react-icons/fc";
import { ImCoinDollar } from "react-icons/im";
import { FcCallback } from "react-icons/fc";

const Container = styled.div`
  display: none;
  @media only screen and (max-width: 480px) {
    display: block;
    position: fixed;
    bottom: 0px;
    left: auto;
    height: 56px;
    width: 95%;
    max-width: inherit;
    background-color: beige;
    box-shadow: 0 2px 8px 1px rgb(64 60 67 / 24%);
    border-color: rgba(223,225,229,0);
 
  }
`;
const Wrapper = styled.div`
 margin-top:20px;
 display: flex;
  align-items: center;
  justify-content: center;
  
  
`;

const Logo = styled.h1`
  font-weight: bold;
  text-decoration: underline crimson;
  @media only screen and (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;

  @media only screen and (max-width: 480px) {
    /* display: none; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    margin: auto;
  }
`;

const MenuItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7px;
  margin-right: 30px;
  font-size: 20px;
  font-weight: bold;
  color: #000;
  cursor: pointer;

  @media only screen and (max-width: 480px) {
    border: 1px solid #777;
    padding: 5px;
    border-radius: 7px;
  }
`;

const MenuItemTitle = styled.p`
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const Button = styled.a`
  border: 2px solid white;
  padding: 10px 15px;
  background-color: crimson;
  color: white;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;

  @media only screen and (max-width: 480px) {
    padding: 5px 10px;
  }
`;

const MenuItemContainter = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 480px) {
    justify-content: space-between;
    width: 100%;
    
    /* padding: 5px 10px; */
  }
`;

const LogoContainter = styled.div`
  width: 15%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 480px) {
    justify-content: center;
    width: 100%;

    /* padding: 5px 10px; */
  }
`;

const CTAContainter = styled.div`
  width: 15%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 480px) {
    justify-content: center;
    width: 100%;

    /* padding: 5px 10px; */
  }
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <MenuItemContainter>
          <Menu>
            <a href="#home">
              <MenuItem>
                <FcHome />
                <MenuItemTitle>{data[0].HomeMenu}</MenuItemTitle>
              </MenuItem>
            </a>
            <a href="#feature">
              <MenuItem>
                <ImPower color="red" />
                <MenuItemTitle>{data[0].FeaturesMenu}</MenuItemTitle>
              </MenuItem>
            </a>
            <a href="#service">
              <MenuItem>
                <FcBriefcase />
                <MenuItemTitle>{data[0].ServicesMenu}</MenuItemTitle>
              </MenuItem>
            </a>
            <a href="#price">
              <MenuItem>
                <ImCoinDollar color="green" />
                <MenuItemTitle>{data[0].PricingMenu}</MenuItemTitle>
              </MenuItem>
            </a>
            <a href="#contact">
              <MenuItem>
                <FcCallback />
                <MenuItemTitle>{data[0].ContactMenu}</MenuItemTitle>
              </MenuItem>
            </a>
          </Menu>
        </MenuItemContainter>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
