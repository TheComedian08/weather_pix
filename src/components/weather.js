import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Loading } from './loading';

class Weather extends React.Component {
  render() {
    const { isGetted, main, city, loading } = this.props;

    const loaded = isGetted ? main.temp : null;
    const weatherSheet = loading ? loaded : <div> WAIT PLZ</div>
    return (
      <Wrapper>
        <span>{city}</span>
        <span>NOW IS {loaded} <sup>o</sup>C</span>
        <Loading/>
      </Wrapper>
    );
  }
}

const mapStateToProps = store => {
  return {
    city: store.weatherData.name,
    main: store.weatherData.main,
    wind: store.weatherData.wind,
    isGetted: store.isGetted
  };
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  font-size: 100px;
    
`;
export default connect(mapStateToProps)(Weather);
