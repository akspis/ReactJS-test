import React from "react";
import { getColor, getMaterial } from "../utils/helper";

const Sidebar = ({ productCartData, removeFromCart }) => {
  return (
    <div className="w-[516px] h-[100vh] bg-[#D9D9D9] z-40 absolute right-0 top-0">
      <div className="pt-[98px] pl-11">
        <span className="text-lg ">Shopping Cart</span>
      </div>
      {/* cartCard section */}
      {productCartData?.map((item) => (
        <div className="flex ml-10 mt-6" key={item.id}>
          <img src={item.image} className="w-[175px] h-[234] bg-red-500" />
          <div className="flex flex-col ml-5">
            <span className="font-medium text-lg">{item.name}</span>
            <div className="">
              <span className="font-bold text-sm pr-1">
                {getColor(item.colorId)}
              </span>
              <span className="text-sm">{getMaterial(item.materialId)}</span>
            </div>
            <span>INR {item.price}</span>
            <button
              className="py-2 px-4 bg-[#3F3737] text-white mt-6"
              onClick={() => removeFromCart(item.id)}
            >
              Remove X
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
