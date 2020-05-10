import React, { Component, Fragment } from 'react';
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <Container>
      <h1>Styled Components</h1>
        <Button success>Hello</Button>
        <Button danger>Hello</Button>
        {/* <button className="button -success">Hello</button>
        <button className="button -danger">Hello</button> */}
      </Container>
    </div>
  );
}

const Container = styled.div`
height: 50vh;
width: 100%;
background-color: skyblue;
`

const Button = styled.button`
  border-radius: 50px;
  border: none;
  padding: 5px;
  min-width: 120px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  &:active, &:focus {
    outline: none;
  }

  background-color: ${props => props.danger ? "#e74c3c" : "#2ecc71" }
`

export default App;
