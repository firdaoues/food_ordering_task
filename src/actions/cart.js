import {ADD_PRODUCT_TO_CARD,REMOVE_PRODUCT_TO_CARD,LOAD_DATA_FROM_LOCAL_STORAGE,CLEAR_CART_DATA} from '../constants/actionTypes'


export const addProductToCard = (productsData)=>(dispatch)=>{
    
    dispatch({ type: ADD_PRODUCT_TO_CARD, payload:productsData  });

}

export const removeProductToCard = (productsData)=>(dispatch)=>{
    dispatch({ type: REMOVE_PRODUCT_TO_CARD, payload:productsData  });

}
export const loadCartData =()=>(dispatch)=>{
    dispatch({ type: LOAD_DATA_FROM_LOCAL_STORAGE  });

}

export const clearCartData =()=>(dispatch)=>{
    dispatch({ type: CLEAR_CART_DATA  });
}