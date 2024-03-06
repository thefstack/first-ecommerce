const productReducer=(state,action)=>{

    switch(action.type){
        case "SET_LOADING":{
            return {
                ...state,
                isLoading:true
            }
        }
        case "API_ERROR":{
            return {
                ...state,
                isLoading:false,
                isError:true
            }
        }
        case "SET_API_DATA":{
            const featureData=action.payload.filter((curr)=>{
                return curr.feature===true;
            })
            return {
                ...state,
                products:action.payload,
                featureProducts:featureData,
                isLoading:false
            }
        }
        case "SET_SINGLE_API_DATA":{
            return {
                ...state,
                isSingleLoading:false,
                singleProduct:action.payload
            }
        }
        case "SET_SINGLE_LOADING":{
            return {
                ...state,
                isSingleLoading:true,
            }
        }
        case "SET_SINGLE_ERROR":{
            return {
                ...state,
                isSingleLoading:false,
                isSingleError:true,
            }
        }
        default :{
            return state
        }
    }
}

export default productReducer