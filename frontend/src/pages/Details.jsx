import React from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../stores/cart";
import { useFetchData } from "../useFetchData";

const Details = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [detail, setDetail] = useState([]);
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const { data, loading } = useFetchData("http://localhost:8000/products");

  const products = data?.listProducts || [];

  const [numberCounter, setNumberCounter] = useState(1);

  useEffect(() => {
    if (!loading && products) {
      const foundDetail = products.find((product) => product.slug === slug);
      if (!foundDetail) {
        navigate("/");
      } else {
        setDetail(foundDetail);
        console.log("producto capturado", detail);
      }
    }
  }, [slug, loading, products, navigate]);

  const addnum = (number) => {
    return number + 1;
  };

  const subsnum = (number) => {
    return number > 0 ? number - 1 : 0;
  };

  const handleCart = () => {
    console.log("cantidad carrito", numberCounter);
    dispatch(
      addToCart({
        productId: detail.id,
        quantity: numberCounter,
      })
    );
    /*  setTimeout(() => {
      console.log("Estado actualizado de items:", store.getState().cart.items);
    }, 100); */
  };

  console.log(numberCounter);
  return (
    <div>
      <h2 className="text-3xl text-center">Product Details</h2>
      <div className="grid grid-cols-2 gap-5 mt-5">
        <div className="flex justify-center items-center">
          <img
            src={detail.image}
            alt={detail.title}
            className="w-[400px] max-w-full h-auto"
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
          <h1 className="font-semibold text-lg ">{detail.title}</h1>
          <p>{detail.description}</p>
          <div className="flex gap-5 justify-center items-center">
            <button
              className="bg-blue-800 text-white font-medium rounded-md py-3 px-6 "
              onClick={() => setNumberCounter(addnum(numberCounter))}
            >
              +
            </button>
            <span className="bg-white h-8 w-8 flex justify-center items-center rounded-full ">
              {numberCounter}
            </span>
            <button
              className="bg-blue-800 text-white font-medium rounded-md p-3 px-6 "
              onClick={() => setNumberCounter(subsnum(numberCounter))}
            >
              -
            </button>
            <button
              className="bg-blue-800 text-white font-medium rounded-md p-3 px-6
           "
              onClick={() => handleCart()}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
