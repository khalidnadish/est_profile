import React from "react";
import styled from "styled-components";
import Search from "../img/search.png";

const Container = styled.div`
  width: 300px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
  box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
  @media only screen and (max-width: 480px) {
    width: 100%;
    justify-content: center;
    
  }
`;

const Image = styled.img`
  width: 20px;
`;

const CardHeader = styled.p`
display: flex;
  justify-content: center;
  align-items: center;
  text-align:center;
  margin-top: 10px;
  text-align:center;
  width: 100%;
  background-color: #ccc;
  border-radius: 8px 0px 0px 8px;
  padding: 12px 8px 12px 8px;
  @media only screen and (max-width: 480px) {
    font-size: 14px;
  }
`;



const ServicePrice = styled.h4`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align:center;
  width: fit-content;

  background-color: ${({ color }) => color};
  color: #fff;
  font-weight: bold;
  border-radius: 0px 8px 8px 0px;
  padding: 12px 8px 12px 8px;
  @media only screen and (max-width: 480px) {
    font-size: 14px;
  }
`; 

const TextDetail = styled.p`

  margin-top: 10px;
  text-align:right;
  font-family: 'Cairo', sans-serif;
  font-weight: 300;
  line-height: 1.9rem;
  @media only screen and (max-width: 480px) {
    font-size: 14px;
  }

`;





const SubTextDetail = styled.li`

  margin-top: 5px;
  text-align:right;
  font-family: 'Cairo', sans-serif;
  font-weight: 300;
  line-height: 1.9rem;
  width: 100%;
  @media only screen and (max-width: 480px) {
    font-size: 14px;
  }

`;

const CardHeaderWraper= styled.div`
width: 100%;
display: flex;


`;

const MiniCard = ({title,detail,sts="مجاني",color="crimson"}) => {
 
  return (
    <Container>
      {/* <Image src={Search} /> */}
      <CardHeaderWraper>
      <ServicePrice color={color}>{sts}</ServicePrice>
      <CardHeader>{title.title}</CardHeader>
      </CardHeaderWraper>

      <SubTitle xdata={title}/>

      





    </Container>
  );
};

export default MiniCard;


const SubTitle=({xdata})=>{
  // console.log(xdata)
return (

<>
{
  xdata.opt.map((el,idx)=><SubTextDetail  key={el+idx}>{el.t}</SubTextDetail>)
}



</>


 
  



)

}