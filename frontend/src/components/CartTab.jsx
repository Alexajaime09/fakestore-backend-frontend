import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
const CartTab = () => {
  const carts = useSelector((store) => store.cart.items);
  return (
    <div className="fixed top-[10%] right-0 bg-gray-700 shadow-2xl w-96 h-[80%] grid grid-rows-[60px_1fr_60px]">
      <h2 className="p-5 text-white text-2xl">Shopping Cart</h2>
      <div>
        {carts.map((item, id) => (
          <CartItem id={id} data={item} />
        ))}
      </div>
      <div className="grid grid-cols-2">
        <button className="bg-black text-white">CLOSE</button>
        <button className="bg-amber-600 text-white"> CHECKOUT</button>
      </div>
    </div>
  );
};

export default CartTab;
