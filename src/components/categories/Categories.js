import React, { useState } from "react";
import { changeVendorMenu } from "../../actions/vendor";

import { useDispatch, useSelector } from "react-redux";

const Categories = (props) => {
  const { categoriesData } = props;
  const [indexToShow, setIndexToShow] = useState(0);
  const [activeCategory, setActiveCategory] = useState("");

  const dispatch = useDispatch();
  // if(!categoriesData) return <h1>No Categories</h1>
  //   console.log(categoriesData);

  function chunkArray(arr, n) {
    var chunkLength = Math.max(arr.length / n, 1);
    var chunks = [];
    for (var i = 0; i < n; i++) {
      if (chunkLength * (i + 1) <= arr.length)
        chunks.push(arr.slice(chunkLength * i, chunkLength * (i + 1)));
    }
    return chunks;
  }

  const allCategoriesArrs = chunkArray(
    categoriesData,
    Math.ceil(categoriesData.length / 10)
  );

  let categorySignButton =
    indexToShow === allCategoriesArrs.length - 1 ? "<" : ">";
  const showMoreCategories = () => {

    if (allCategoriesArrs.length !== indexToShow + 1) {
      setIndexToShow(indexToShow + 1);
    } else {
      setIndexToShow(indexToShow - 1);
    }
  };

  const onClickChangeCategory = (id, productIds) => {
    setActiveCategory(id);

    console.log("activeCategory", activeCategory);
    dispatch(changeVendorMenu(productIds,id));
  };

  return (
    <div className="flex flex-nowrap pt-6 pb-8 ml-16">
      {allCategoriesArrs[indexToShow].map((category) => (
        <div key={category.id} className="flex">
          <button
          
            className={`${
              activeCategory === category.id
                ? "bg-gray-700 text-white"
                : "bg-white text-black"
            } hover:bg-gray-700 hover:text-white w-full px-3  mr-2 rounded-full`}
            onClick={()=>{onClickChangeCategory(category.id,category.productIds)}}
          >
            {category.name}
          </button>
        </div>
      ))}
      <button
        onClick={showMoreCategories}
        className="w-12 px-3  mr-2 border rounded-full"
      >
        {" "}
        {categorySignButton}
      </button>
    </div>
  );
};

export default Categories;
