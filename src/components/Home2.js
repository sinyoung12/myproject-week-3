import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Home = () => {

    const circle = [0,1,2,3,4];
    const list = ['월', '화', '수', '목', '금', '토', '일'];
    const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min); 
    const num = getRandom(0, 5);
    const sum = random.reduce() // 합 / 7
    const aver = sum / 7; 

    return (
        <div className = "Home">
            
            <h2>내 일주일은?</h2>
            <h3>{list}</h3>





            
        </div>



    )

        

       
    
}

