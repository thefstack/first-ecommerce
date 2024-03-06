import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from "styled-components"
import "../assets/css/common.css"
import bgImage from "../assets/images/banner-bg.png"
import HeaderMain from './HeaderMain';

const Header = () => {
  return (
    <Wrapper>
    <div className="bg">
    <img src={bgImage} alt="failed to load bg image" />
    </div>
        <div className="header-top">
            <NavLink className="link" to="/">Home</NavLink>
            <NavLink className="link" to="/product">Best Sellers</NavLink>
            <NavLink className="link" to="/product">New Release</NavLink>
            <NavLink className="link" to="/product">Today's Deal</NavLink>
            <NavLink className="link" to="/contact">Contact</NavLink>
            <NavLink className="link" to="/aboutus">About Us</NavLink>
        </div>
        <div className="logo">
            <h1>Eflyer</h1> 
        </div>
        <HeaderMain/>
    </Wrapper>
  )
}

const Wrapper=styled.section`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
    width:100%;
    padding-bottom:10px;
    position:relative;
    gap:10px;

.bg{
    width:100%;
    top:0;
    height:600px;
    position:absolute;
    z-index:-1;
}
.bg img{
    width:100%;
    height:100%;
    object-fit:fill;

}
.header-top{
    z-index:10;
    display: flex;
    width: 80%;
    max-width: 1400px;
    background-color: #34495e;
    justify-content: space-around;
    align-items: center;
    padding: 15px 20px;
    gap: 5px;
    border-radius: 0 0 50px 50px;

    .link{
        color: #fff;
        text-decoration: none;
        font-size: 1.2rem;
        z-index:10;
        &:hover{
            color: chocolate;
        }
    }
}
.logo{
    h1{
        font-size: 3rem;
        font-family:cursive sans-serif;
        color:#fff;
        user-select:none;
    }
}


@media(max-width:900px){
    .header-top .link{
        font-size: 1rem;
    }
    .bg{
    width:100%;
    height:400px;
    top:0;
    position:absolute;
    z-index:-1;
}
.bg img{
    width:100%;
    height:100%;
    object-fit:cover;
}
}
@media(max-width:780px){
    .header-top{
        display:none
    }
}
@media(max-width:400px){
    .logo h1{
        font-size:2rem
    }
}

`;

export default Header
