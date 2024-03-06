import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import FormatPrice from "../helper/FormatPrice"

const Product = (props) => {
    const {id,title,price,image}=props;
  return (
    <Wrapper>
      <NavLink to={`/product/${id}`} className="products-link" >
            <div className="products">
                <h3>{title}</h3>
                <p>Price: <FormatPrice price={price}/></p>
                <img src={image} alt="failed to load" />
                <button>Buy Now</button>
            </div>
        </NavLink>
    </Wrapper>
  )
}
const Wrapper=styled.div`
display:flex;
justify-content:center;
align-items:center;

.products-link{
    color:#000;
    text-decoration:none;
}
.products{
    display: flex;
    width: 250px;
    height: 550px;
    text-align:center;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 15px;
    padding: 20px 30px;
    background-color: rgba(255, 140, 1, 0.158);
    border-radius: 10px;
}
.products img{
    width:100%;
    height:200px;
}
.products button{
    border: none;
    padding: 5px 20px;
    background-color: #00000075;
    color: #fff;
    border-radius: 10px;
    font-size: 1.1rem;
}
`;

export default Product
