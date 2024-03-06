import React,{useEffect, useState} from 'react'
import { useProductContext } from '../context/productContext'
import Loader from '../components/Loader';
import Product from '../components/Product';
import "../assets/css/common.css"
import styled from 'styled-components';

const Products = () => {
    const [data,setData]=useState([]);

    const {products,isLoading}=useProductContext();

    useEffect(()=>{
        setData(products)
    },[products])

    if(isLoading==true){
        return <Loader/>
    }

  return (
    <Wrapper>
        <h1 className='heading'>Products</h1>
        <div className='products-items'>
      {data.map((curr)=>{
        return <Product key={curr.id} {...curr}/>
      })}
    </div>
    </Wrapper>
  )
}

const Wrapper=styled.section`
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
    width:100%;
    margin-top:100px;

    .products-items{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
    width: 80%;
    justify-content: space-around;
    align-items: center;
    padding: 50px 0;
}
.heading{
    font-size: 3rem;
    color: #fff;
    background-color: rgba(68, 66, 66, 0.738);
    padding: 5px 30px;
    border-radius: 15px;
}
@media(max-width:1100px){
    .products-items{
        grid-template-columns: 1fr 1fr;
    }
}
@media(max-width:700px){
    .products-items{
        grid-template-columns: 1fr;
    }
}
`;

export default Products
