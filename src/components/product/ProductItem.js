import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {addProductToCard,removeProductToCard} from '../../actions/cart'

const ProductItem = (props) => {
  const dispatch = useDispatch();
  const  {cart}  = useSelector((state) => state);
    // console.log("cart",cart)
  const { productData } = props;
//   console.log("ProductItem", productData);


const onAddProductToCart=()=>{
    dispatch(addProductToCard(productData));
}
const onRemoveProductToCart=()=>{
    dispatch(removeProductToCard(productData));
}

    const productInCart = cart?  cart.find(item => item.product.id === productData.id ) : undefined;
    const isRemoveDisabled = productInCart &&  productInCart.quantity

  const pricef = (productData.price / 100);

  return (
    
    <div className='border rounded-lg w-4/5  border-gray-300 mg-10px pb-2 space-x-4  max-h-30  mt-5 pt-4  ml-auto mr-auto '>
      <div className=" ">
      
      <p className="text-lg capitalize ml-4 font-nunito  font-bold w-48  " >{productData.name}</p> 
      
      <div className='relative flex flex-row  justify-end pr-2   '>
     {(productInCart && productInCart.quantity > 0) &&  <button className=' border rounded-full border-none  text-base font-nunito  bg-gray-200  pr-2  pl-2 ' disabled={!isRemoveDisabled}   onClick={onRemoveProductToCart} >-</button>}
      <p className='text-black font-nunito   pr-2  pl-2'> {productInCart ? productInCart.quantity : ""}</p>
      <button className='border rounded-full border-none font-nunito   text-base bg-gray-200  pr-2  pl-2' onClick={onAddProductToCart}>+</button>
      </div>
      </div>
    

      <div>
     <p className=" text-sm  font-normal font-nunito text-gray-400" >{productData.description}</p>
     <p className="text-sm  font-nunito font-bold   " >{pricef}€</p>
     </div>
     </div>
      
  
   
  );
};
export default ProductItem;
