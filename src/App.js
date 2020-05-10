import React, { Component, Fragment } from 'react';
import styled, { createGlobalStyle, css, ThemeProvider } from "styled-components";
import theme from "./theme";

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

const Card = styled.div`
  background-color: white;
`

const Container = styled.div`
  background-color: navy;
  height: 50vh;
  ${Card} {
    background-color: blue;
  }
`

const Input = styled.input.attrs({
  required: true
})`
  border: none;
  border-radius: 5px;
  margin-bottom: 20px;
  ${awesomeCard}
`

const Button = styled.button`
  border-radius: 30px;
  padding: 25px;
  background-color: ${props => props.theme.successColor}
`

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Input placeholder="write"/>
        <Form />
      </Container>
      </ThemeProvider>
    </div>
  );
}

const Form = () => (<Card><Button>Hello</Button></Card>)

export default App;
