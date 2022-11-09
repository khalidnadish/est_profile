import { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";

import Contact from "./components/Contact";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Navbarbtm from "./components/Navbarbtm";
import Price from "./components/Price";
import Service from "./components/Service";
import Ipkhalidnadish from "./components/Ipkhalidnadish";
import Mailview from "./components/Mailview";
import { db } from "./components/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";
import axios from "axios";

const AppContainer = styled.div`
  width: 100%;
  /* background-color: black; */
`;
const Container = styled.div`
  /* height: calc(100vh-4px) ; */
  /* height: 100vh; */

  width: 100%;
  border-bottom: 5px solid rosybrown;
  /* overflow: hidden; */
`;

const Shape = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 65px;
  left: 0;
  z-index: -1;
`;

const IntoShape = styled.div`
  ${Shape}
  clip-path: polygon(67% 0, 100% 0%, 50% 100%, 55% 150%);
  /* clip-path: polygon(67% 0, 100% 0%, 100% 100%, 55% 100%); */
  background-color: rgb(228, 84, 160);
  /* z-index: -1; */
`;

const FeatureShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 55% 0%, 33% 100%, 0 100%);
  background-color: pink;
`;

const ServiceShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 33% 0%, 33% 100%, 0 100%);
  background-color: #f88497;
`;

const PriceShape = styled.div`
  ${Shape}
  clip-path: polygon(33% 0, 100% 0%, 100% 100%, 67% 100%);
  background-color: crimson;
`;

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

const App = () => {
  const [login, setLogin] = useState([]);
  const [loginStuts, setLoginStuts] = useState(true);
  const loginCollection = collection(db, "login");
  const smallScreen = window.screen.width <= 480 ? true : false;
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    const newVistor = async () => {
      const ipx = await axios.get("https://api.ipify.org?format=json");
      await addDoc(loginCollection, { IP: ipx.data, Time: new Date() });
      setLoginStuts(false);
    };
    loginStuts && newVistor();
  }, []);

  return (
    <>
      <AppContainer>
        <Navbar />

        <Container>
          <Router>
            <Routes>
              {/* <Route path="/" element={<Home />} /> */}
              <Route path="/ipkhalidnadish" element={<Ipkhalidnadish />} />
              <Route path="/mailkhalidnadish" element={<Mailview />} />
            </Routes>
          </Router>
        </Container>

        <Container>
          <Intro />
          {/* <IntoShape /> */}
        </Container>
        <Container>
          <Feature />
          {/* <FeatureShape /> */}
        </Container>
        <Container>
          <Service />
          {/* {!smallScreen && <ServiceShape />} */}
        </Container>
        <Container>
          <Price />
          {/* <PriceShape /> */}
        </Container>
        <Container>
          <Contact />
          <Footer />
        </Container>
        <Navbarbtm />
      </AppContainer>
    </>
  );
};

export default App;
