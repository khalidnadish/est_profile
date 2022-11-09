import React,{ useState,useEffect } from 'react'
import styled, { css } from "styled-components";
import { db } from "../components/firebase";
import {collection,getDocs,addDoc} from "firebase/firestore";
import axios from "axios";



const Container = styled.div`
  /* height: calc(100vh-4px) ; */
  /* height: 100vh; */

  width: 100%;
  height: 100vh;
  color: #000000;
  border-bottom: 5px solid rosybrown;
  overflow: auto;
  /* overflow: hidden; */
  direction: ltr;
`; 



const Wraper = styled.div`
  display: flex; 
  justify-content: space-around;
  width: 100%;
  color: #000000;
`; 




const Text = styled.p`
  /* width: 100%; */
  color: #000000;
  border-bottom: 1px solid rosybrown;
  padding: 10px;
`;   
function Ipkhalidnadish() {
    const [login,setLogin]=useState([])
    const [load, setload] = useState(true);
    const [loginStuts,setLoginStuts]=useState(true)
    const loginCollection= collection(db,"login")
   
    useEffect(() => {
      const getUser = async ()=>{ 
         const data=await  getDocs(loginCollection);
         setLogin(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
         setload(false);
      }
      getUser()
    }, []);
  


  return (
    <Container>
         <Text>Visiting Counter : {login.length}</Text>
         {load && <Text>Loading......</Text>}
      {login.map((el) => {
        return (
          <React.Fragment key={el.id}>
           <Wraper>
            <Text> {el.IP.ip}</Text>
            <Text> {new Date(el.Time.seconds*1000).toUTCString()}</Text>
            </Wraper>   
          </React.Fragment>
        );
      })}
    </Container>
  );
}

export default Ipkhalidnadish