import React, { Component, Fragment } from 'react';
import styled, { createGlobalStyle, css, keyframes } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }
`

function ButtonPractice() {
  return (
    <div className="App">
      <GlobalStyle />
      <Container>
      <h1>Styled Components</h1>
        <Button>Hello</Button>
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

  background-color: ${props => props.danger ? "#e74c3c" : "#2ecc71" };
  ${props => {
    if(props.danger) {
      return css`animation: ${rotation} 2s linear infinite`;
    }
  }}
`

const Anchor = styled(Button)`
  text-decoration: none;
`

const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export default ButtonPractice;
