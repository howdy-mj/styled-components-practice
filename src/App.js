import React, { Component, Fragment } from 'react';
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }
`

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Container>
      <h1>Styled Components</h1>
        <Button success>Hello</Button>
        <Button danger>Hello</Button>
        <Anchor as="a" href="https://google.com">Go to Google</Anchor>
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

const Anchor = styled(Button)`
  text-decoration: none;
`

export default App;
