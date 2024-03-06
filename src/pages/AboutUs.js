import React from 'react'
import styled from 'styled-components'

const AboutUS = () => {
  return (
    <Wrapper>
        <div className="aboutus">
            <h1>This is about us page.</h1>
        </div>
    </Wrapper>
  )
}

const Wrapper=styled.section`

.aboutus{
    height:70vh;
    display:flex;
    justify-content:center;
    align-items:center;
    color:#000;
}

`;

export default AboutUS
