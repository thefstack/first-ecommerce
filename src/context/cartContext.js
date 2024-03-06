import { createContext, useReducer, useContext, useEffect } from "react";
import cartReducer from "../reducer/cartReducer";
import axios from "axios";

const CartContext = createContext();

const initialState = {
  isCartLoading: false,
  isCartError: false,
  cart: [],
};

const CartAPI="https://first-ecommerce-api.onrender.com/products/"
const userCartAPI="https://first-ecommerce-api.onrender.com/user/cart"

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = async (singleProduct) => {
    dispatch({ type: "CART_LOADING" });
    try {
      const { id } = singleProduct;

      const body={
        email:"1@gmail.com",
        singleProduct
      }
      const res = await axios.post(CartAPI +"addtocart/"+ id,body);
      if(res.status==400){
        throw new Error();
      }
    } catch (error) {
      dispatch({ type: "CART_ERROR" });
    }
  }

  const getCartData=async()=>{
    dispatch({type:"CART_LOADING"})
    try{
        const body={
            email:"1@gmail.com"
        }
        const res=await axios.post(userCartAPI,body);
        if(res.status==400){
            throw new Error();
        }
        const cartData=await res.data;
        
        dispatch({type:"GET_CART_DATA",payload:cartData})
    }catch(error){
        console.log(error);
        dispatch({type:"CART_ERROR"})
    }
  }

  useEffect(() => {
    getCartData()
  }, []);

  return (
    <CartContext.Provider value={{ ...state, addToCart ,getCartData}}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
}

export { CartProvider, CartContext, useCartContext };
