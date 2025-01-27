import React from "react";
import { Link } from "react-router-dom";
import iconCart from "../img/icon-cart.png";
const ProductCart = (props) => {
  const { id, title, price, image, slug } = props.data;

  return (
    <div className="bg-white p-5 rounded-xl shadow-md flex flex-col justify-center ">
      <Link
        to={`/${slug}`}
        className="lg:w-[225px] h-auto object-cover drop-shadow-s[0_80px_30px_#0007] "
      >
        <img className="" src={image} alt={title}></img>
      </Link>
      <h3 className="text-lg py-3 text-center font-medium ">{title}</h3>
      <div className="flex justify-between items-center">
        <p>
          <span className="text-2xl font-medium">${price}</span>
        </p>
        <button className=" p-2 bg-gray-300 rounded-md text-sm hover:bg-gray-400 gap-2 flex  ">
          <img src={iconCart} className="w-5" />
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCart;
