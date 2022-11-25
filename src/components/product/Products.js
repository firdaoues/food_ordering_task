import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import { InView } from "react-intersection-observer";
import { onScrollOrder } from "../../actions/vendor";



const Products = (props) => {
  const dispatch = useDispatch();

  const { products, categoryData, isScrollValid } = useSelector(
    (state) => state.vendor
  );

  const onScrollChange = (scrollValue) => {
    if (isScrollValid !== scrollValue) {
      dispatch(onScrollOrder(scrollValue));
    }
  };

  return (
    <div className=" bg-neutral-50  pt-5">
      <div className="border-slate-300  mr-5 ">
        <div className=" container max-w-screen-sm mx-auto pb-10 ">
          <img
            className="object-cover border rounded-lg h24 w-80 sm:w-fit sm:h-40  ml-auto mr-auto "
            src={categoryData.imageUrl}
          />
        </div>

        <h2 className="capitalize font-nunito text-2xl ml-20 ">
          {categoryData.name}
        </h2>
        <InView onChange={onScrollChange}>
          {products.map((product) => (
            <ProductItem productData={product} key={product.id} />
          ))}
        </InView>
      </div>
    </div>
  );
};
export default Products;
