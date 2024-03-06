import { createContext, useReducer ,useContext, useEffect} from "react";
import reducer from "../reducer/productReducer";
import axios from "axios";

const AppContext=createContext();

const ProductAPI="http://localhost:5000/products/getproducts"

const initialState={
    isLoading:false,
    isError:false,
    products:[],
    singleProduct:{},
    featureProducts:[],
    isSingleLoading:false,
    isSingleError:false,
}

const AppProvider=({children})=>{

    const [state, dispatch]=useReducer(reducer,initialState)

    const getProducts=async(url)=>{
        dispatch({type:"SET_LOADING"})
        try{
            const res=await axios.get(url)
            await axios.get("https://first-ecommerce-api.onrender.com/");
            const product=await res.data;
            dispatch({type:"SET_API_DATA",payload:product})
        }catch(error)
        {
            dispatch({type:"API_ERROR"});
        }
    }
    const getSingleProduct=async(id)=>{
        dispatch({type:"SET_SINGLE_LOADING"});
        const url=`http://localhost:5000/products/getproducts/${id}`;
        try{
            const res=await axios.get(url);
            const product=await res.data;
            dispatch({type:"SET_SINGLE_API_DATA",payload:product})
        }catch(error){
            dispatch({type:"SET_SINGLE_ERROR"})
        }
    }

    
    useEffect(()=>{
        getProducts(ProductAPI)
    },[])

    return <AppContext.Provider value={{...state,getSingleProduct}}>
        {children} 
    </AppContext.Provider>    
};

const useProductContext=()=>{
    return useContext(AppContext);
}


export { AppProvider, AppContext, useProductContext };