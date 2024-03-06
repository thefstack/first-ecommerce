import React, { useEffect , useState} from 'react'
import styled from 'styled-components'
import {NavLink} from "react-router-dom"
import "../assets/css/common.css"
import { useProductContext } from '../context/productContext'
import Product from './Product'

const FeatureProducts = (props) => {

    const [data,setData]=useState([]);

    const {featureProducts,isLoading}=useProductContext();

    const getData=()=>{
        const filteredData=featureProducts.filter((curr)=>{
            return curr.category==props.category
        })
        setData(filteredData);
    }

    useEffect(()=>{
        getData();
    },[featureProducts,props.category])

    if(isLoading){
        return <>
            <p>...Loading</p>
        </>
    }
  return (
    <Wrapper>
      <div className="feature-products">
            {data.map((curr)=>{
                return <Product key={curr.id} {...curr}/>
            })}
      </div>
    </Wrapper>
  )
}

const Wrapper=styled.div`
.feature-products{
    display:flex;
    justify-content:space-around;
    flex-wrap: wrap;
    gap: 20px;
    width: 100%;

}

`;

export default FeatureProducts
