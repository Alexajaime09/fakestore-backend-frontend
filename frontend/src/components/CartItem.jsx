import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useFetchData } from "../useFetchData";
import { changeQuantity, deleteProduct } from "../stores/cart";

const CartItem = (props) => {
  const { productId, quantity } = props.data;
  const [totalPro, setTotalPro] = useState(0);
  const { data, loading } = useFetchData("http://localhost:8000/products");
  const [detail, setDetail] = useState(null);
  const products = data?.listProducts || [];
  const dispatch = useDispatch();
  //const idItem = detail.id;
  useEffect(() => {
    if (!loading && products.length > 0) {
      const findDetail = products.find((product) => product.id === productId);
      setDetail(findDetail || null);
    }
  }, [productId, products, loading]);

  const handleMinusQuanity = () => {
    dispatch(
      changeQuantity({
        productId: productId,
        quantity: quantity - 1,
      })
    );
  };

  const handlePlussQuanity = () => {
    dispatch(
      changeQuantity({
        productId: productId,
        quantity: quantity + 1,
      })
    );
  };

  const addProduct = (a, b) => {
    return a * b;
  };

  useEffect(() => {
    if (detail) {
      setTotalPro(addProduct(quantity, detail.price));
    }
  }, [quantity, detail]);

  return (
    <div>
      {loading ? (
        <p>Cargando...</p>
      ) : detail ? (
        <div className="p-3">
          <h2 className="text-white font-medium pb-2 ">{detail.title}</h2>
          <div className="flex justify-between items-center">
            <img
              src={detail.image}
              alt={detail.title}
              className=" max-h-[100px] w-auto rounded-md p-2 bg-white "
            />
            <div className="flex gap-4 justify-between items-center">
              <button
                className="w-7 h-7 bg-white text-black rounded-full font-bold
              "
                onClick={handlePlussQuanity}
              >
                +
              </button>
              <p className="bg-blue-950 w-9 h-9 rounded-full flex justify-center items-center text-white">
                {quantity}
              </p>

              <button
                className="w-7 h-7 bg-white text-black rounded-full font-bold"
                onClick={handleMinusQuanity}
              >
                -
              </button>

              <button onClick={() => dispatch(deleteProduct({ productId }))}>
                delete
              </button>
            </div>

            <p className="text-white">${totalPro}</p>
          </div>
          <div>
            <p></p>
          </div>
        </div>
      ) : (
        <p>Producto no encontrado</p>
      )}
    </div>
  );
};

export default CartItem;
