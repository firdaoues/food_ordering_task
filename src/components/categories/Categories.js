import React, { useState, useRef } from "react";
import { changeVendorMenu } from "../../actions/vendor";

import { useDispatch, useSelector } from "react-redux";

const Categories = (props) => {
  const { categoriesData } = props;
  const [indexToShow, setIndexToShow] = useState(0);
  const [activeCategory, setActiveCategory] = useState("");
  const [scrollX, setscrollX] = useState(0); // For detecting start scroll postion
  const [scrolEnd, setscrolEnd] = useState(false); // For detecting end of scrolling
  const dispatch = useDispatch();

  const ref = useRef();

  const onClickChangeCategory = (id, productIds) => {
    setActiveCategory(id);

    console.log("activeCategory", activeCategory);
    dispatch(changeVendorMenu(productIds, id));
  };
  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;

    setscrollX(scrollX + scrollOffset); // Updates the latest scrolled postion

    //For checking if the scroll has ended
    if (
      Math.floor(ref.current.scrollWidth - ref.current.scrollLeft) <=
      ref.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  const scrollCheck = () => {
    setscrollX(ref.current.scrollLeft);
    if (
      Math.floor(ref.current.scrollWidth - ref.current.scrollLeft) <=
      ref.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  return (
    <div className="flex justify-center ml-20">
      {/* <div className="flex justify-start flex-wrap whitespace-nowrap no-scrollbar pt-6 pb-8 border-b  border-gray-200  font-Nunito font-medium text-base  ml-20"> */}
      {scrollX !== 0 && (
          <button className="hidden lg:block border rounded-full border-none   text-base bg-gray-200 pt-0 pr-2 pl-2" onClick={() => scroll(-50)}>
           X
          </button>
        )}
      <div
        ref={ref}
        onScroll={scrollCheck}
        className="flex overflow-x-auto space-x-8 whitespace-nowrap scroll-smooth lg:w-[70vw] w-[80vw] pt-6 pb-8 border-b  border-gray-200 overflow-hidden  font-Nunito font-medium text-base "
      >
       
        {categoriesData.map((category) => (
          <div key={category.id}>
            <button
              className={`${
                activeCategory === category.id
                  ? "bg-gray-700 text-white"
                  : "bg-white text-black"
              } hover:bg-gray-700 hover:text-white w-full px-3   rounded-full`}
              onClick={() => {
                onClickChangeCategory(category.id, category.productIds);
              }}
            >
              {category.name}
            </button>
          </div>
        ))}
      </div>
      {!scrolEnd && (
        <button
          onClick={() => scroll(50)}
          
          className="hidden lg:block border rounded-full border-none   text-base bg-gray-200 pt-0 pr-2 pl-2"
        >
          {" "}
          X
        </button>
      )}
    </div>
  );
};

export default Categories;
