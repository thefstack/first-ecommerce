const cartReducer = (state, action) => {
    switch (action.type) {
      case "CART_LOADING":
        return {
          ...state,
          isCartLoading: true,
          isCartError: false,
        };
      case "CART_ERROR":
        return {
          ...state,
          isCartLoading: false,
          isCartError: true,
        };
      // case "ADD_TO_CART":
      //   return {
      //     ...state,
      //     isCartLoading: false,
      //     isCartError: false,
      //     cart: [...state.cart, action.payload],
      //   };
        case "GET_CART_DATA":
          return{
            ...state,
            isCartLoading:false,
            isCartError:false,
            cart:action.payload
          }
          
      default:
        return state;
    }
  };
  
  export default cartReducer;
  