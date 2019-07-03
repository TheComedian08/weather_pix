import React from 'react';
import styled from 'styled-components';

export class Header extends React.Component {
  
  state = {
    time: new Date().toLocaleString('ru')
  };
  componentDidMount() {
    this.interval = setInterval(
      () =>
        this.setState({
          time: new Date().toLocaleString('ru')
        }),
      1000
    );
  }
  render() {
    return (
      <PageHeader>
        <span>Weather</span>
        <span>{this.state.time}</span>
      </PageHeader>
    );
  }
}

const PageHeader = styled.div`
  font-size: 100px;
  height: 150px;
  line-height: 125px;
  display: flex;
  justify-content: space-around;
  justify-items: center;
  margin-bottom: 10px;
  span:last-child {
    font-size: 25px;
  }
`;
