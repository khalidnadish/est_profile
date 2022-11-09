import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { db } from "../components/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";
import axios from "axios";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  /* height: 100%; */
  color: #000000;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  /* border-bottom: 5px solid rosybrown; */
  overflow: auto;
  direction: ltr;
`;

const Wraper = styled.div`
  display: flex;
  /* justify-content: space-around; */
  flex-direction: column;
  border: 1px solid #000000;
  /* width: 100%; */
  color: #000000;
`;
const MainWraper = styled.div`
  display: flex;
  /* justify-content: space-around; */
  gap: 15px;
  /* border: 1px solid #000000; */
  /* width: 100%; */
  color: #000000;
`;

const Text = styled.p`
  color: #000000;
  border-bottom: 1px solid rosybrown;
  padding: 5px;
  font-size: 18px;
  font-family: 'Cairo', sans-serif;
`;
const TextTilte = styled.p`
  color: #000;
  background-color: lightgreen;
  border-bottom: 1px solid rosybrown;
  padding: 2px;
  border-radius: 5px;
  font-size: 18px;
  text-align: center;
`;


function Mailview() {
  const [mail, setmail] = useState([]);
  const [load, setload] = useState(true);
  const [mailStuts, setmailStuts] = useState(true);
  const mailCollection = collection(db, "mail");

  useEffect(() => {
    
    const getUser = async () => {
      const data = await getDocs(mailCollection);
      setmail(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setload(false);
    };
    getUser();
   
  }, []);

  return (
    <Container>
      <Text>Mails Counter : {mail.length}</Text>
      {load && <Text>Loading......</Text>}
      <hr />
      <hr />
      <MainWraper>
      {mail.map((el) => {
        return (
          <React.Fragment key={el.id}>
            <Wraper>
              <Text><TextTilte>phone</TextTilte> {el.Phone}</Text>
              <Text><TextTilte>email</TextTilte>{el.email}</Text>
              <Text><TextTilte>From</TextTilte> {el.from_name}</Text>
              <Text><TextTilte>Price</TextTilte> {el.price}</Text>
              <Text><TextTilte>Note</TextTilte> {el.message}</Text>
            </Wraper>
          </React.Fragment>
        );
      })}
      </MainWraper>
     

    </Container>
  );
}

export default Mailview;
