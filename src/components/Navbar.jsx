import React from "react";
import styled from "styled-components";
import data from "./data.json";
import { FcHome } from "react-icons/fc";
import { ImPower } from "react-icons/im";
import { FcBriefcase } from "react-icons/fc";
import { ImCoinDollar } from "react-icons/im";
import { FcCallback } from "react-icons/fc";

const Container = styled.div`
  width: 100%;
  display: flex;
  background-color: white;
  position: sticky;
  top: 0px;
  height: 56px;
  z-index: 100;
 
`;
const Wrapper = styled.div`
  /* padding: 0px 30px 0px 30px; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  box-shadow: 0 2px 8px 1px rgb(64 60 67 / 24%);
  border-color: rgba(223, 225, 229, 0);
  @media only screen and (max-width: 480px) {
     width: 100%;
     text-align:center;
  }
   
`;

const Logo = styled.h2`
  font-weight: bold;
  text-decoration: underline crimson;
  margin-right: 10px;
  color: #000;
  @media only screen and (max-width: 480px) {
     width: 100%;
     text-align:center;
  }
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
 
  width: 100%;
  @media only screen and (max-width: 480px) {
   display:none;
  }

  
`;

const MenuItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 7px;
  font-weight: bold;
  /* margin-right: 30px; */

  color: #000;
  /* background-color:red; */
  cursor: pointer;

  @media only screen and (max-width: 480px) {
    display: none;
     
  }
`;

const MenuItemTitle = styled.p`
  color: ${({ color }) => color};

  @media screen and (max-device-width: 480px){
    display: none;
  }
`;

const MenuItemContainter = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-device-width: 480px)
   {
    display: none;
   
  }
 
`;

const LogoContainter = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 480px) {
    justify-content: center;
    width: 100%;

    /* padding: 5px 10px; */
  }
`;

const Link = styled.a`
  width: 100%;
  display: flex;
  /* align-items: center; */
  /* justify-content: space-between; */
  @media only screen and (max-width: 480px) {
    /* justify-content: center; */
    /* width: 100%; */

    /* padding: 5px 10px; */
  }
`;

const CTAContainter = styled.div`
  width: 20%;
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
        <LogoContainter>
          <Logo>{data[0].LogoTitle}</Logo>
        </LogoContainter>

        <MenuItemContainter>
          <Menu>
            <Link href="#home">
              <MenuItem>
                <FcHome />
                <MenuItemTitle>{data[0].HomeMenu}</MenuItemTitle>
              </MenuItem>
            </Link>
            <Link href="#feature">
              <MenuItem>
                <ImPower color="red" />
                <MenuItemTitle>{data[0].FeaturesMenu}</MenuItemTitle>
              </MenuItem>
            </Link>
            <Link href="#service">
              <MenuItem>
                <FcBriefcase />
                <MenuItemTitle>{data[0].ServicesMenu}</MenuItemTitle>
              </MenuItem>
            </Link>
            <Link href="#price">
              <MenuItem>
                <ImCoinDollar color="green" />
                <MenuItemTitle>{data[0].PricingMenu}</MenuItemTitle>
              </MenuItem>
            </Link>
            <Link href="#contact">
              <MenuItem>
                <FcCallback />
                <MenuItemTitle color="red">{data[0].ContactMenu}</MenuItemTitle>
              </MenuItem>
            </Link>
          </Menu>
        </MenuItemContainter>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
