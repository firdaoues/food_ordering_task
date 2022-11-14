import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVendorByid } from "../../actions/vendor";
import { useParams } from "react-router-dom";
import Categories from "../categories/Categories";
import Products from "../product/Products";
import Popular from "../popular/Popular";
import Cart from "../cart/Cart";

const Vendor = () => {
  const { vendor, products } = useSelector((state) => state.vendor);

  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getVendorByid(id));
  }, [id]);

  if (vendor) {
    const popularProducts = vendor.menu.products.filter(
      (product) => vendor.menu.popularProductIds.indexOf(product.id) != -1
    );

    return (
      <div className="flex">
        <div className="flex-1 basis-10/12 h-full bg-white">
          <h2 className="text-center"> Menu </h2>
          {/* banner */}
          <div
            className="relative w-full h-56 bg-norpeat bg-auto bg-cover bg-center mb-10"
            style={{ backgroundImage: `url(${vendor.brand.headerImageUrl})` }}
          >
            <div className="absolute -bottom-7 left-10 shadow-xl h-16 w-16 bg-white">
              <img className=" h-16 w-16" src={vendor.brand.logoUrl} />
            </div>
          </div>
          {/* product details */}
          <div className="ml-20">
            <h1 className="font-bold capitalize  font-serif text-2xl ">
              {vendor.brand.name}
            </h1>
            <div class="flex items-center">
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Rating star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <p class="ml-2 text-sm font-bold text-gray-900 dark:text-white">
                {vendor.rating.score}
              </p>
              <span class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
              <p class="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">
                {vendor.rating.votes} reviews
              </p>
            </div>
            <p className="text-slate-400 text-sm flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 pr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {vendor.deliveryTime}

         
            </p>
          </div>
          {/* categories */}
          <div>
            <Categories categoriesData={vendor.menu.categories} />
          </div>

          {/* Products */}
          <div>
            <Popular popularProducts={popularProducts} />
            {products ? <Products /> : ""}
          </div>
        </div>
        {/* cart */}
        <div className="flex-1 basis-2/12 h-full bg-white hidden md:flex shadow-lg">
          <Cart />
        </div>
      </div>
    );
  } else {
    <div>
      <h1>Vendor not found</h1>
    </div>;
  }
};
export default Vendor;
