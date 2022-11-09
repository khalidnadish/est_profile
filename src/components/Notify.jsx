import React,{useEffect} from "react";
import styled,{keyframes} from "styled-components";


const slide=keyframes`
0%{transform:rotate(0deg)}
25%{transform:rotate(45deg)}
50%{transform:rotate(90deg)}
70%{transform:rotate(180deg)}

100%{transform:rotate(0deg)}
`;




const skew=keyframes`
0%{transform:skewX(53deg) translateX(-500px)}
60%{transform:translateX(0px)}
62%{transform:skewX(0deg) translateX(30px)}
70%{transform:skewX(-200deg)}
80%{transform:skewX(0deg) translateX(0)}
90%{transform:skewX(-5deg)}

100%{transform:skewX(0deg)}
`;

const Container = styled.div`
  position: fixed;
  top:0;
  z-index: 100;

  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  color: #000;
  background-color: lightgreen;
  border-radius: 8px;
  -webkit-box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
  box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
  opacity: 1;
  transition: .3s ease;
  animation: ${skew} 4s;
  animation-iteration-count: 1;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  &:hover{
    box-shadow: 0 0 12 #fff;
    opacity: .9;
  }
`;

const CloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  background-color: white;
  width: 20px;
  height: 20px;
  padding: 1px;
  font-size: 1rem;
  /* border: none; */
  font-weight: bolder;
  border-radius: 5px;
  right: 5px;
  top: 5px;

 
 
`;

function Notify({open,setOpen,msg}) {
    useEffect(() => {
      const interval= setInterval(()=>{setOpen(false)},4000)
    
      return () => {
        clearInterval(interval)
      }
    }, [open])
    
  return (
    <Container>
      <CloseButton onClick={()=>setOpen(false) } >X</CloseButton>
      {msg}
    </Container>
  );
}

export default Notify;
