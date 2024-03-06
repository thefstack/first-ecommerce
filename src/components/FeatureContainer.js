import React from 'react'
import "../assets/css/common.css"
import FeatureProducts from './FeatureProducts'
import "../assets/css/common.css"
import styled from 'styled-components'

const FeatureContainer = (props) => {
  return (
    <Wrapper>
      <div className='feature-container'>
      <h1>{props.heading}</h1>
      <FeatureProducts category={props.category}/>
    </div>
    </Wrapper>
  )
}

const Wrapper=styled.section`

.feature-container{
    width:100%;
    display: flex;
    flex-direction:column;
    justify-content:center;
    gap:30px;

}
.feature-container h1{
    display:flex;
    justify-content:center;
    font-size:2rem;
    text-align:center;
  }

`;

export default FeatureContainer
