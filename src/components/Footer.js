import React from 'react'
import "../assets/css/common.css"
import styled from "styled-components"
import {NavLink} from "react-router-dom"

const Footer = () => {
  return (
    <Wrapper>
      <div className="footer">
        <h1>Eflyer</h1>
        <p>thefstack@gmail.com</p>
        <div className="header-copy">
            <NavLink className="link" to="/">Home</NavLink>
            <NavLink className="link" to="/products">Best Sellers</NavLink>
            <NavLink className="link" to="/products">New Release</NavLink>
            <NavLink className="link" to="/products">Today's Deal</NavLink>
            <NavLink className="link" to="/contact">Contact</NavLink>
            <NavLink className="link" to="/aboutus">About Us</NavLink>
        </div>
        <p>HelpLine Number : +91 1234 567 890</p>
        <div className="hr"></div>
        <p>&copy;2023 All Right Reserved. Designed and coded by @thefstack</p>
      </div>
    </Wrapper>
  )
}

const Wrapper=styled.section`
.footer{
    background-color: rgb(60, 58, 58);
    color:#fff;
    margin-top: 50px;
    padding: 30px 0 20px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-size: 1rem;
}
.footer h1{
    font-size: 3rem;
    margin-bottom: 10px;
}
.header-copy{
    display: flex;
    width: 80%;
    justify-content: space-around;
    align-items: center;
    padding: 15px 20px;
    gap: 10px;
    border-radius: 0 0 50px 50px;
    margin: 10px 0;
}
.footer .hr{
    width: 100%;
    height: 1px;
    background-color: #fff;
    margin-bottom: 10px;
}
.header-copy .link{
    color:#fff;
    text-decoration: none;
}

`;

export default Footer
