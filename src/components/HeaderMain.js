import React, { useState } from 'react'
import styled from 'styled-components'
import { AiOutlineMenu, AiOutlineShoppingCart} from 'react-icons/ai'
import { BiSearch, BiArrowBack} from 'react-icons/bi'
import { CiUser } from 'react-icons/ci'
import "../assets/css/common.css"
import {NavLink} from "react-router-dom"

const HeaderMain = () => {

    const [clicked,setClicked]=useState(false);

    const menu=()=>{
        setClicked(~clicked);
    }
  return (
    <Wrapper>
      <div className="header-main">
      {clicked ? <div className="menu-list">
            <BiArrowBack onClick={menu} className="menu-close"/>
            <NavLink className="link" onClick={menu} to="/">Home</NavLink>
            <NavLink className="link" onClick={menu} to="/product">Best Sellers</NavLink>
            <NavLink className="link" onClick={menu} to="/product">New Release</NavLink>
            <NavLink className="link" onClick={menu} to="/product">Today's Deal</NavLink>
            <NavLink className="link" onClick={menu} to="/contact">Contact</NavLink>
            <NavLink className="link" onClick={menu} to="/aboutus">About Us</NavLink>
      </div>:""}
      {clicked ? <div onClick={()=>setClicked(false)} className='close'></div>:""}
        <div className="menu-search">
            <AiOutlineMenu onClick={menu} className='menu-icon'/>
            <div className="search">
                <input type="text" name='search-item' placeholder='Search products'/>
                <button><BiSearch/></button>
            </div>
        </div>
        <div className="cart-login">
            <NavLink to="/cart" className="cart">
            <AiOutlineShoppingCart className='icon'/>
            cart
            </NavLink>
            <NavLink to="/login" className="login">
            <CiUser className='icon'/>
            login
            </NavLink>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper=styled.section`
width:100%;
display:flex;
justify-content:center;

.header-main{
    display: flex;
    width: 90%;
    justify-content: space-around;
    margin-top: 10px;
    flex-wrap: wrap;
    gap: 30px;
}

.menu-search{
    display: flex;
    gap: 30px;

    .menu-icon{
        font-size: 2rem;
        font-weight: 700;
        color:#fff;
    }

    .search{
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;

    }
    .search input{
        font-size: 1.3rem;
        position: relative;
        width: 350px;
        height: 40px;
        padding: 5px 20% 5px 15px;
        outline:none;
        border: none;
        border-radius: 15px;
    }
    .search button{
        position: absolute;
        font-size: 2rem;
        background: transparent;
        border: none;
        outline: none;
        right: 0px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor:pointer;
        color:#fff;
        background:#45474B;
        height:100%;
        width:50px;
        border-radius: 0 15px 15px 0;
    }
}
.cart-login{
    display: flex;
    gap: 30px;
    width: fit-content;

    .cart,.login{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.4rem;
        font-weight: 700;
        padding: 0 10px;
        color:#fff;
        text-decoration: none;
    }
    .icon{
        font-size: 2rem;
        margin-right: 10px;
    }
}

.menu-list{
    display:flex;
    flex-direction:column;
    position:absolute;
    top: 0;
    left: 0;
    gap: 10px;
    background-color: #34495e;
    height: 100vh;
    width: 200px;
    z-index: 99;
    padding: 80px 30px;
    user-select:none;
}
.menu-list .link{
    color: #fff;
    font-size: 1.3rem;
    text-decoration: none;
}
.menu-close{
    font-size: 3rem;
    color: #fff;
    border: 2px solid #fff;
    padding: 5px;
    border-radius: 50%;
    position: absolute;
    top: 20px;
    right: 20px;
}
.close{
    width: 100%;
    z-index: 11;
    height: 100vh;
    position: absolute;
    right: 0;
    top: 0;
}

@media(max-width:900px){
    .header-main{
        flex-direction:column-reverse;
        justify-content:center;
    }
    .cart-login,.menu-search{
        justify-content:center;
        width:100%
    }
}

@media(max-width:700px){
    .menu-search{ 
        align-items: center;   
        .menu-icon{
            font-size: 2.5rem;
        }
    
        .search input{
            width: 300px;
            height: 45px;
        }
        .search button{
            font-size: 2.5rem;
        }
    }
    .cart-login{    
        .cart,.login{
            font-size: 1.6rem;
        }
        .icon{
            font-size: 2.5rem;
        }
    }
}

@media(max-width:500px){
    .menu-search{     
        .search input{
            width: 100%;
        
        }
    }
    .cart-login{
        gap:5px
    }
}

`;

export default HeaderMain
