import React from 'react'
import "../assets/css/common.css"
import styled from "styled-components"
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai"

const HeaderScroller = () => {
  return (
    <Wrapper>
      <div className='header-scroller'>
      <AiOutlineArrowLeft className='scroll-icon-left'/>
      <div className="scroller">
        <h1>Get Start</h1>
        <h1>Your Favourite Shopping</h1>
        <button>Buy Now</button>
      </div>
      <AiOutlineArrowRight className='scroll-icon-right'/>
    </div>
    </Wrapper>
  )
}

const Wrapper=styled.section`
.header-scroller{
    margin-top: 40px;
    display: flex;
    position: relative;
    justify-content: center;
    padding: 10px 50px;
}
.scroller{
    padding: 10px 30px;
    display: flex;
    gap: 3px;
    align-items: center;
    flex-direction: column;
    text-align: center;
}
.scroller h1{
    color:#fff;
    font-size: 2rem;
}
.scroller button{
    margin-top: 20px;
    outline: none;
    font-size: 1.2rem;
    border: none;
    background-color: rgba(0, 0, 0, 0.692);
    color: #fff;
    padding: 5px 20px;
    border-radius: 10px;
    cursor: pointer;
}
.scroller button:hover{
    background-color: black;
}
.scroll-icon-left{
    position: absolute;
    left: 0;
    font-size: 2.5rem;
    color: #fff;
    background-color: #4444445b;
    padding: 5px;
    border-radius: 50%;
}
.scroll-icon-right{
    position: absolute;
    right:0;
    font-size: 2.5rem;
    color: #fff;
    background-color: #4444445b;
    padding: 5px;
    border-radius: 50%;
}

@media(max-width:900px){
    .scroller h1{
        color: #000;
    }
}
@media(max-width:650px){
    .scroller{
        padding: 0;
    }
    .scroller h1{
        font-size: 1.5rem;
    }
}

@media(max-width:400px){
    .header-scroller{
        display: none;
    }
}

`;

export default HeaderScroller
