import { Link } from "react-router-dom";
import image from "../../public/cart.svg";

const Header = () => {
  return (
    <div className="flex justify-between p-8 z-10 sticky bg-gradient-to-t from-transparent to-black">
      <div>
        <span className="text-[#BFBEBE] font-[800]">RIGHT</span>
        <span className="text-[#FFF] font-[800]">FIT.COM</span>
      </div>
      <div className="flex">
        <Link to="/">
          <span className="pr-11 text-[#FFF]">All Products</span>
        </Link>
        <Link to="/featured">
          <span className="pr-7 text-[#FFF]">Featured Products</span>
        </Link>
        <div className="flex">
          <img src={image} alt="cartIcon" className="text-[#FFF] pr-4" />
          <span className="text-[#FFF]">{0}</span>
        </div>
      </div>
    </div>
  );
};
export default Header;
