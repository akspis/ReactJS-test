import React, { useEffect, useState } from "react";
import image from "../../public/bg.png";
import useFetch from "../customeHooks/useFetch";
import Card from "./Card";
import Pagination from "./Pagination";
import { BACKEND_URL, BEARER_TOKEN } from "../utils/constants";
import Sidebar from "./SideBar";
import { useDispatch, useSelector } from "react-redux";
import { decrementCart, incrementCart } from "../redux/reducer";
import Shimmer from "./Shimmer";

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const [filterItem, setFilterItem] = useState("");
  const [cartData, setCartData] = useState([]);
  const open = useSelector((state) => state.cartData.open);
  const dispatch = useDispatch();
  const [totalItems, setTotalItems] = useState(0);
  const itemsPerPage = 6;

  const materials = useFetch("material");
  const colors = useFetch("colors");

  const getProductData = async () => {
    try {
      const data = await fetch(BACKEND_URL + "products", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${BEARER_TOKEN}`,
          Accept: "application/json",
        },
      });
      const jsonData = await data.json();
      setProducts(jsonData.products);
      setFilterProducts(jsonData.products);
      setTotalItems(products.length);
    } catch (error) {}
  };

  const filterData = (item) => {
    let filterData = products;
    filterData = products.filter(
      (pitem) => item.id === pitem.materialId,
      setFilterItem(item.name)
    );
    ((filterData = products.filter((pitem) => item.id === pitem.colorId)),
    setFilterItem(item.name)),
      setFilterProducts(filterData);
    setTotalItems(filterData.length);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const addToCart = (itemsToAdd) => {
    let isIncrement = true;
    setCartData((prevCartData) => {
      isIncrement = false;
      const exists = prevCartData.some(
        (cartItem) => cartItem.id === itemsToAdd.id
      );
      if (!exists) {
        const newData = [...prevCartData, itemsToAdd];
        isIncrement = true;
        return newData;
      }
      return prevCartData;
    });
    if (isIncrement) {
      dispatch(incrementCart());
    }
  };

  const removeFromCart = (id) => {
    const removedCart = cartData.filter((item) => item.id !== id);
    setCartData(removedCart);
    dispatch(decrementCart());
  };

  if (!products) return <Shimmer />;

  useEffect(() => {
    getProductData();
  }, []);

  return (
    <>
      {open ? (
        <Sidebar productCartData={cartData} removeFromCart={removeFromCart} />
      ) : (
        <></>
      )}
      <div className="h-[500px]">
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
      <div className="flex m-8">
        {/* filter Section */}
        <div className="flex flex-col">
          <span className="mb-8 font-bold text-[16px]">Filters</span>
          <div className="flex flex-col mb-8 cursor-pointer">
            <span className="py-1">Materials</span>
            <span className="py-1" onClick={() => setFilterProducts(products)}>
              All
            </span>
            <ul>
              {materials &&
                materials?.resData?.material?.map((item) => (
                  <li
                    className="py-1 "
                    key={item.id}
                    onClick={() => filterData(item)}
                  >
                    {item.name}
                  </li>
                ))}
            </ul>
          </div>
          <div className="flex flex-col cursor-pointer">
            <span className="py-1">Colors</span>
            <span className="py-1" onClick={() => setFilterProducts(products)}>
              All
            </span>
            <ul>
              {colors &&
                colors?.resData?.colors?.map((item) => (
                  <li
                    className="py-1"
                    key={item.id}
                    onClick={() => filterData(item)}
                  >
                    {item.name}
                  </li>
                ))}
            </ul>
          </div>
        </div>
        {/* card section */}
        <div className="ml-[137]">
          <div className="flex flex-col cursor-pointer">
            {filterItem !== "" ? (
              <div className="flex">
                <div className="p-2 bg-[#E4E4E4]">
                  <span className="font-bold py-[5px] px-[10px]">
                    {filterItem}
                  </span>
                  <span
                    className="font-bold"
                    onClick={() => {
                      setFilterItem("");
                      setFilterProducts(products);
                      setTotalItems(products.length);
                    }}
                  >
                    X
                  </span>
                </div>
              </div>
            ) : (
              <></>
            )}
            <div className="flex flex-wrap">
              {filterProducts &&
                filterProducts
                  ?.slice(currentPage * 6 - 6, currentPage * 6)
                  .map((item) => (
                    <Card
                      colorId={item.colorId}
                      materialId={item.materialId}
                      image={item.image}
                      name={item.name}
                      price={item.price}
                      data={item}
                      key={item.id}
                      addToCart={() => addToCart(item)}
                    />
                  ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[71px] flex items-center justify-center mb-11">
        <Pagination
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
};

export default Products;
