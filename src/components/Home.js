import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"
import { useState } from "react";



const Home = () => {


  const circle = [0, 1, 2, 3, 4];
  const list = ['월', '화', '수', '목', '금', '토', '일'];
  const [random, setRandom] = useState([]);
  
  
  console.log(random)

  // const sum = random.reduce((a,b) => a+b); 
  // const aver = sum / 7; 

  return (
    <>
      <Title>내 일주일은?</Title>
      {list.map((list, index) => {
        const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min); 
        const num = getRandom(0, 5);
        // setArr(arr = arr.map((value)=>(value = num)))
        
        // setRandom([...random, num]);
        
        return (
          <Line key={index}>
            <h3>{list}</h3>
            {circle.map((e, i) => {
              return <Circle key={i} style={{ backgroundColor: i <= num ? '#FF1493' : '#ddd' }} />
            })}
            <Link to={`/score/${list}`} >
              <Triangle onClick={() => {
              }} />
            </Link>            
          </Line>
        )
      })}
    </>
  );
};
const Line = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 25px;
  h3 {
    padding: 5px;
    padding-right: 8px;
    background-color: lavenderblush;
    border-radius: 30px;
  }
`

const Circle = styled.div`
  width: 30px;
  height: 30px;
  background-color: #FF1493;
  border-radius: 30px;
  margin: 5px;
`

const Triangle = styled.div`
  width: 0;
  height: 0;
  border-bottom: 15px solid transparent;
  border-top: 15px solid transparent;
  border-left: 25px solid purple;
  border-right: 25px solid transparent;
  margin-left: 5px;
`

const Title = styled.h1`
  text-align: center;
`

export default Home;