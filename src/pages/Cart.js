import React, { useEffect } from 'react'
import { useCartContext } from '../context/cartContext';
import styled from "styled-components"
import "../assets/css/common.css"

const Cart = () => {
   
    const {getCartData,cart}=useCartContext();

    useEffect(()=>{
        getCartData();
    },[])
const data=()=>{
    console.log(cart)
}

  return (
    <Wrapper>
        <div className="cart-container">
            <div className="table">
                <div className="table-header">
                    <p>Items</p>
                    <p>price</p>
                </div>
                <div className="table-description">
                    {
                        cart.map((curr)=>{
                            return <div className="item">
                                <p>{curr.title}<p className='category'></p>{curr.category}</p>
                                <p>${curr.price}</p>
                            </div>
                        })
                    }
                    {cart.length==0 ? <h1 style={{textAlign:"center"}}>cart is empty</h1>:""}
                </div>
            </div>
        </div>
    </Wrapper>
  )
}

const Wrapper=styled.section`
margin:50px 0 0 0;

.table{
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 20px 80px;
    color: #fff;
    background-color: rgba(110, 107, 107, 0.508);
}
.table .table-header{
    display: flex;
    justify-content: space-between;
    font-size: 1.5rem;
    font-weight: 700;
    padding: 20px;
    border-bottom: 1px solid #ffffffc5;
}
.table .table-description{
    display: flex;
    padding: 20px;
    flex-direction: column;
    gap: 10px;
}
.table .table-description .item{
    display: flex;
    justify-content: space-between;
    gap: 80px;
}
.table .table-description .category{
    font-size: 0.7rem;
}

@media(max-width:700px){
    .table{
        padding: 0%;
    }
}
@media(max-width:500px){
    .table{
        padding: 0%;
    }
}

`;

export default Cart
