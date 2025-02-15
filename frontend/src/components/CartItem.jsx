import React, { useState, useEffect } from "react";
import { useFetchData } from "../useFetchData";

const CartItem = (props) => {
  const { productId, quantity } = props.data;
  const { data, loading } = useFetchData("http://localhost:8000/products");
  const [detail, setDetail] = useState(null);
  const products = data?.listProducts || [];

  useEffect(() => {
    if (!loading && products.length > 0) {
      const findDetail = products.find((product) => product.id === productId);
      setDetail(findDetail || null);
    }
  }, [productId, products, loading]);

  useEffect(() => {
    console.log("cartItem", detail);
  }, [detail]);
  return (
    <div>
      {loading ? (
        <p>Cargando...</p>
      ) : detail ? (
        <div>
          <h2>{detail.title}</h2>
          <p>{quantity}</p>
          <img
            src={detail.image}
            alt={detail.title}
            className=" max-h-[100px] w-auto rounded-md p-2 bg-white "
          />

          <p>Precio: ${detail.price}</p>
        </div>
      ) : (
        <p>Producto no encontrado</p>
      )}
    </div>
  );
};
/*  return (
    <div>
      {detail.map((product) => (
        <div className="flex justify-between items-center">
          <p>{product.title}</p>
          <div></div>
        </div>
      ))}
    </div>
  ); */

export default CartItem;
