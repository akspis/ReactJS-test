import image from "../../public/bg.png";
const Products = () => {
  return (
    <div>
      <img
        src={image}
        alt="mainImage"
        className="bg-cover w-[100vw] absolute top-0"
      />
      <span className="absolute top-[267] left-[140] text-6xl font-bold text-white">
        Latest Styles
      </span>
      <span className="absolute top-[321] left-[140] text-2xl text-white">
        At Yesterday’s Prices
      </span>
      <button className="absolute top-[366] left-[140] py-3 px-4 bg-[#CA4022] text-white rounded-lg">
        BROWSE ALL STYLES
      </button>
    </div>
  );
};

export default Products;
