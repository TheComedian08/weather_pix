import React from 'react';
import styled from 'styled-components';
import City from './city';
import Weather from './weather';

export const Page =()=>{
    return(
        <Wrapper>
            <City/>
            <Weather/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`