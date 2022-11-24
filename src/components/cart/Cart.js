import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCartData } from "../../actions/cart";

import { addProductToCard, removeProductToCard } from "../../actions/cart";
const Cart = () => {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart);
  const { vendor } = useSelector((state) => state.vendor);

  console.log(vendor);
  const onAddProductToCart = (productData) => {
    dispatch(addProductToCard(productData));
  };
  const onRemoveProductToCart = (productData) => {
    dispatch(removeProductToCard(productData));
  };
  const minOrderValue = 15;
  let totalOrderPrice = 0;
  cartData.map((item) => {
    totalOrderPrice += item.quantity * (item.product.price / 100);
  });

  const onClickCheckOut = () => {
    alert("order sent");
    dispatch(clearCartData());
  };
  return (
    <div className="w-56 absolute text-base    font-nunito text-xs  h-full    border-l shadow-gray-500   divide-y divide-slate-200 ">
      {cartData.map((item, i) => (
        <div className="flex flex-row  " key={i}>
          <div className="mt-5">
            <div className=" space-x-3 flex flex-row  pb-2 pt-2">
              <p className="text-stone-500 ml-4 "> {item.quantity} x </p>{" "}
              <p className="font-semibold whitespace-nowrap">
                {item.product.name}{" "}
              </p>
            </div>

            <div className="flex flex-rows space-x-24  ">
              <p className="text-stone-500 ml-4 pb-2  ">
                {(item.quantity * (item.product.price / 100)).toFixed(2)} €
              </p>
              <div className="space-x-1   pb-5">
                <button
                  className=" border  rounded-full border-none  text-base  bg-gray-200 pt-0 pr-2 pl-2  "
                  onClick={() => {
                    onRemoveProductToCart(item.product);
                  }}
                >
                  -
                </button>
                <button
                  className="border rounded-full border-none   text-base bg-gray-200 pt-0 pr-2 pl-2 "
                  onClick={() => onAddProductToCart(item.product)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className=" flex justify-center ">
        <button
          className="bg-orange-500 h-10 mt-20 w-40 rounded-lg text-white mb-10 center "
          disabled={totalOrderPrice < minOrderValue}
          onClick={onClickCheckOut}
        >
          Checkout ({totalOrderPrice.toFixed(2)} €)
        </button>
      </div>
    </div>
  );
};
export default Cart;
