import React,{useEffect,useState} from 'react'
import "../assets/css/common.css"
import "../assets/css/common.css"
import styled from 'styled-components'
import { useProductContext } from '../context/productContext'
import { useParams} from "react-router-dom"
import  Loader from "../components/Loader"
import FormatPrice from "../helper/FormatPrice"
import { useCartContext } from '../context/cartContext'

const SingleProduct = () => {

    const {getSingleProduct,isSingleLoading,singleProduct}=useProductContext();

    const {addToCart}=useCartContext()

    const cartBtn=async()=>{
        addToCart(singleProduct);
        document.getElementById("cart-response").style.display="flex";
        
        setTimeout(()=>{
            document.getElementById("cart-response").style.display="none";
        },3000)
        
    }    

    const {title,image,description,price}=singleProduct;

    const {id}=useParams();
    
    useEffect(()=>{
        getSingleProduct(id);
    },[])

    if(isSingleLoading===true){
        return <Loader/>
    }
   
  return (
    <Wrapper>
        <div className="single-product">
            <div id="cart-response">Item added to cart</div>
            <div className="img">
                <img src={image} alt="sadsa" />
            </div>
            <div className="product-info">
                <p>{title}</p>
                <p><FormatPrice price={price}/></p>
                <p>{description}</p>
                <div className="add-to-cart">
                    <button onClick={cartBtn}>Add to cart</button>
                </div>
            </div>    
        </div>
    </Wrapper>
  )
}

const Wrapper=styled.section`
display:flex;
justify-content:center;
align-item:center;
margin-top:100px;


#cart-response{
    position:absolute;
    top:10px;
    background-color:#000;
    color:#fff;
    z-index:999;
    padding:10px 50px;
    font-size:2rem;
    border-radius:15px;
    display:none;
}

.single-product{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: start;
    gap: 100px;
    padding: 80px;
    width: 95%;
    height: 100%;
    background-color: rgba(84, 83, 83, 0.195);
    border-radius: 50px;
}
.single-product .img img{
    width: 250px;
    height: 350px;
}
.single-product .product-info{
    width: 700px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    gap: 10px;
    font-size: 2rem;

}
.product-info p:nth-child(1){
    font-weight: 700;
    font-size: 2.5rem;
    margin-bottom: 20px;
}
.product-info p:nth-child(2){
    font-weight: 700;
    margin-bottom: 20px;
}
.product-info p:nth-child(3){
    font-size: 1rem;
    margin-bottom: 30px;
}
.product-info button{
    font-size: 1.6rem;
    padding: 5px 30px;
    border: none;
    outline: none;
    background-color: rgba(0, 0, 0, 0.545);
    color: #fff;
    text-align: center;
    padding-bottom: 10px;
    border-radius: 10px;
    cursor: pointer;
}
@media(max-width:1300px){
    .single-product .product-info{
        width: 500px;
    }
    
}
@media(max-width:750px){
    .single-product{
        padding: 50px 20px;
    }
    .single-product .img img{
        width: 200px;
        height: 280px;
    }
}

`;

export default SingleProduct
