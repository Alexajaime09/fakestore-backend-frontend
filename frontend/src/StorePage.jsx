import { useEffect, useState } from "react";
import axios from "axios";
import { useFetchData } from "./useFetchData";
import ProductCart from "./components/ProductCart";

const StorePage = () => {
  const { data, loading } = useFetchData("http://localhost:8000/products");
  //console.log(data);

  const products = data?.listProducts || [];
  console.log(products);
  return (
    <div>
      <h1>Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
        {products.map((product) => (
          <ProductCart info={product} />
        ))}
      </div>
    </div>
  );
};

export default StorePage;
