import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { Link , useParams } from "react-router-dom"
const Score = (props) => {
  

  const { day} = useParams();
  const [circle] = useState([0, 1, 2, 3, 4]);
  const [idx, setIdx] = useState();


  return (
    <Container>
      <h1>{day}요일 평점 남기기</h1>
      <Line>
        {circle.map((e, i) => {
          return <Circle key={i} onClick={() => { setIdx(i) }} style={{ backgroundColor: i <= idx ? '#FF1493' : '#ddd' }} />
        })
        }
      </Line>
      <Link to="/">
        <button> 평점 남기기</button>
      </Link>
    </Container>
  )
}

const Day = styled.span`
  background-color : palegoldenrod;
  border: 1px solid palegoldenrod;
  border-radius: 10px;
  color: white;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  
  
  button {
    width: 150px;
    height: 60px;
    margin-top: 40px;
    border: 1px solid palegoldenrod;
    border-radius: 5px;
    font-size: 20px;
    background-color: palegoldenrod;
  }
`

const Line = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const Circle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  margin: 5px;
  margin-top: 40px;
  
`

export default Score;