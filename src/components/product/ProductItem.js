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
    <div className='border rounded-lg border-gray-300 mg-10px pb-8 space-x-4  flex justify-between mt-5 pt-6 ml-20 mr-5 font-sans'>
      <div>
     <p className="text-lg ml-8 font-serif  " >{productData.name}</p> 
     <p className=" text-base ml-8 font-serif text-slate-400" >{productData.description}</p>
     <p className="text-lg ml-8 font-serif   " >{pricef}€</p>
     </div>
     <div className='relative flex flex-row  pt-4'>
      <button className='border rounded-full border-none  text-2xl bg-slate-100 pt-0 pr-2  pl-2' disabled={!isRemoveDisabled}   onClick={onRemoveProductToCart} >-</button>
      <p className='text-black  pt-0 pr-2  pl-2'> {productInCart ? productInCart.quantity : 0}</p>
      <button className='border rounded-full border-none  text-2xl bg-slate-100 pt-0 pr-2  pl-2' onClick={onAddProductToCart}>+</button>
      </div>
      
    </div>
   
  );
};
export default ProductItem;
