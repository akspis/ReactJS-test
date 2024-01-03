import { useState } from "react";
import { getColor, getMaterial } from "../utils/helper";

const Card = ({ image, name, price, colorId, materialId, addToCart }) => {
  const [showAddToCart, setShowAddToCart] = useState(false);

  return (
    <div className="mt-8 mr-14">
      <div className="bg-[#F8F7F7] relative" onClick={addToCart}>
        <img
          src={image}
          alt="cardImage"
          className="hover:opacity-25 cursor-pointer bg-black"
          onMouseOver={() => setShowAddToCart(true)}
          onMouseOut={() => setShowAddToCart(false)}
        />
        {showAddToCart && (
          <span
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2
            -translate-y-1/2 text-black"
          >
            {" "}
            Add to Cart
          </span>
        )}
      </div>
      <span className="pt-[14px] font-medium text-lg">{name}</span>
      <div className="flex">
        <span className="font-bold text-sm pr-1">{getColor(colorId)}</span>
        <span className="text-sm">{getMaterial(materialId)}</span>
      </div>
      <span className="pt-4">INR {price}</span>
    </div>
  );
};
export default Card;
