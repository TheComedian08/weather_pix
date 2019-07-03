import React from 'react';
import styled from 'styled-components';
import { fetchWeather } from '../reducers/cityReducer';
import { connect } from 'react-redux';

class City extends React.Component {
  render() {
    let input;

    return (
      <Wrapper>
        <form
          onSubmit={e => {
            e.preventDefault();
            if (!input.value.trim()) {
              return;
            }
            this.props.GetCity(input.value.toLowerCase());
            input.value = '';
            
          }}
        >
          <input
            type='text'
            placeholder='Type your city'
            ref={node => (input = node)}
          />
          <input type='submit'/>
        </form>
      </Wrapper>
    );
  }
}
const mapStateToProps = store => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
        GetCity: (text) => {
            return dispatch(fetchWeather(text))}
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(City);


const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  padding-top: 20px;
  border-top: 2px solid rgba(0,0,0,0.3);
  border-bottom: 2px solid rgba(0,0,0,0.3);
    form{
      display: flex;
      justify-content: space-around;
    }
    input[type='text']{
      height: 25px;
      width: 85%;
      font-size: 20px;
      font-family: 'Press Start 2P', cursive;
    }
    input[type='submit']{
      width: 10%;
      height:30px;
      font-family:'Press Start 2P', cursive;
      background-color: transparent;
      color: white;
      border: 1px solid white;
      &:hover{
        background-color: white;
        color: #003cff;
      }
    }
`