import React from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useFetchData } from "../useFetchData";

const Details = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [detail, setDetail] = useState([]);
  const { data: products, loading } = useFetchData(
    "http://localhost:8000/products"
  );

  useEffect(() => {
    cos;
    if (!loading && products) {
      const foundDetail = products.find((product) => product.slug === slug);
      if (!foundDetail) {
        navigate("/");
      } else {
        setDetail(foundDetail);
      }
    }
  }, [slug]);

  return (
    <div>
      <h2 className="text-3xl text-center">Product Details</h2>
      <div className="grid grid-cols-2 gap-5 mt-5">
        <div>
          <img src={detail.image} alt={detail.title} />
        </div>
      </div>
    </div>
  );
};

export default Details;
