import React from 'react'
import "../assets/css/common.css"
import FeatureContainer from '../components/FeatureContainer'
import styled from "styled-components"
import { useProductContext } from '../context/productContext'
import Loader from "../components/Loader"
import HeaderScroller from '../components/HeaderScroller'

const Home = () => {

    const {isLoading}=useProductContext();


    if(isLoading){
      return <Loader/>
    }

  return (
    <Wrapper>
      <div className='home'>
      <HeaderScroller/>
      <FeatureContainer heading="Electronics" category="electronics"/>
      <FeatureContainer heading="Man & Woman Fashion" category="men's clothing"/>
      <FeatureContainer heading="Jewelery Accessories" category="jewelery"/>
    </div>
    </Wrapper>
  )
}

const Wrapper=styled.section`
.home{
  width:100%;
  padding:0 5%;
  display:flex;
  justify-content:center;
  gap:40px;
  flex-direction:column;
}
`;
export default Home
