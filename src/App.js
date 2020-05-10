import React, { Component, Fragment } from 'react';
import styled, { createGlobalStyle, css, keyframes } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }
`

const awesomeCard = css`
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  background-color: white;
  border-radius: 10px;
  padding: 20px;
`

const Container = styled.div`
  background-color: navy;
  height: 50vh;
`

const Input = styled.input.attrs({
  required: true
})`
  border: none;
  border-radius: 5px;
  ${awesomeCard}
`

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Container>
        <Input placeholder="write"/>
      </Container>
    </div>
  );
}



export default App;
