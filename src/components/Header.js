import { Link } from "react-router-dom";
import image from "../../public/cart.svg";
import { useDispatch, useSelector } from "react-redux";
import { closeCart, openCart } from "../redux/reducer";

const Header = () => {
  const open = useSelector((state) => state.cartData.open);
  const cartCount = useSelector((state) => state.cartData.cart);
  const dispatch = useDispatch();

  const openSideBar = () => {
    if (open === false) {
      dispatch(openCart());
    } else {
      dispatch(closeCart());
    }
  };

  return (
    <div className="flex justify-between p-8 z-50 sticky bg-gradient-to-t from-transparent to-black">
      <div>
        <span className="text-[#BFBEBE] font-[800]">RIGHT</span>
        <span className="text-[#FFF] font-[800]">FIT.COM</span>
      </div>
      <div className="flex z-50">
        <Link to="/">
          <span className="pr-11 text-[#FFF]">All Products</span>
        </Link>
        <Link to="/featured">
          <span className="pr-7 text-[#FFF]">Featured Products</span>
        </Link>
        <div className="flex" onClick={openSideBar}>
          <img src={image} alt="cartIcon" className="text-[#FFF] pr-4" />
          <span className="text-[#FFF]">{cartCount}</span>
        </div>
      </div>
    </div>
  );
};
export default Header;
