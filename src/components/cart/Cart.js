import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {clearCartData} from '../../actions/cart'

import { addProductToCard, removeProductToCard } from "../../actions/cart";
const Cart = () => {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart);
  const  {vendor} = useSelector((state) => state.vendor);

    console.log(vendor)
  const onAddProductToCart = (productData) => {
    dispatch(addProductToCard(productData));
  };
  const onRemoveProductToCart = (productData) => {
    dispatch(removeProductToCard(productData));
  };
const minOrderValue = 15
let totalOrderPrice = 0
cartData.map(item=> {
    totalOrderPrice +=   item.quantity * (item.product.price / 100)
})
console.log("totalOrderPrice",totalOrderPrice)

  const onClickCheckOut =()=>{
    alert("order sent")
    localStorage.setItem('myCart',[])
    dispatch(clearCartData());
  }
  return (
    <div className="text-base ml-8 font-serif pt-8 h-full">
      {cartData.map((item,i) => (
        <div className="flex flex-row" key={i}>
          <div>
          <p >
            {" "}
            {item.quantity} x {item.product.name}
          </p>
          <p>{item.quantity * (item.product.price / 100)} €</p>
          </div>
          <div>
          <button
            className=" border ml-2 rounded-full border-none  text-2xl bg-slate-100 pt-0 pr-2  pl-2"
            onClick={() => {
              onRemoveProductToCart(item.product);
            }}
          >
            -
          </button>
          <button
            className="border rounded-full border-none  text-2xl bg-slate-100 pt-0 pr-2  pl-2"
            onClick={() => onAddProductToCart(item.product)}
          >
            +
          </button>
          </div>
        </div>
      ))}
        <button className="bg-orange-500 h-10 mt-20 w-40 rounded-lg text-white mb-10" disabled={totalOrderPrice<minOrderValue} onClick={onClickCheckOut}>Checkout</button>
    </div>
  );
};
export default Cart;
