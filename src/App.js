import React from "react";
import styled from "styled-components";
import { Route , Routes} from "react-router-dom";
import Home from "./components/Home";
import Score from "./components/Score";


function App() {
  return (
    <div className="App">
      <Container>
        <Routes>
        <Route path="/" element = {< Home/>}> </Route>
        <Route path="/score/:day" element = {<Score/>}> </Route>
        </Routes>
      </Container>
    </div>
  );
};

const Container = styled.div `
  max-width: 350px;
  min-height: 70vh;
  background-color: white;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`
export default App;
