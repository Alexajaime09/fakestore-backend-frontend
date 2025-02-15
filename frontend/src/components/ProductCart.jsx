import React from "react";
import { Link } from "react-router-dom";
import iconCart from "../img/icon-cart.png";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../stores/cart";

const ProductCart = (props) => {
  const carts = useSelector((store) => store.cart.items);
  console.log("carrito", carts);

  const { id, title, price, image, slug } = props.info;
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    try {
      dispatch(
        addToCart({
          productId: id,
          quantity: 1,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
  console.log(props.info);

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
        <button
          className=" p-2 bg-gray-300 rounded-md text-sm flex hover:bg-gray-400 gap-2 "
          onClick={handleAddToCart}
        >
          <img src={iconCart} className="w-5" />
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCart;
