import React, { Component } from 'react';
import styled from 'styled-components';
import { Header } from './components/header';
import { Page } from './components/page';
class App extends Component {
  render() {
    const time = new Date().getHours();
    const backgroundTime = time => {
      return time >= 22 || time < 6
        ? '#000c33'
        : time >= 6 && time < 10
        ? '#3363ff'
        : time >= 10 && time < 18
        ? '#003cff'
        : time >= 18 && time < 22
        ? '#002499'
        : null;
    };
    return (
      <Wrapper bck={backgroundTime(+time)}>
        <Header />
        <Page />
      </Wrapper>
    );
  }
}

export default App;

const Wrapper = styled.div`
  color: white;
  background-color: ${props => props.bck};
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
