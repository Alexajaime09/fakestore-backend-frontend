import { useEffect, useState } from "react";
import axios from "axios";
import ProductCart from "./components/ProductCart";
const Store = () => {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        const data = response.data;
        console.log(data);
        setState(data);
        if (loading) {
          return <p>Cargando datos ...</p>;
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
        {state.map((p) => (
          <div key={p.id}>
            <div className="flex flex-col">
              <h2 className="font-bold">{p.title}</h2>
              <div>
                <img
                  src={p.image}
                  alt={p.titlw}
                  style={{ width: "150px", height: "auto" }}
                />
              </div>
              <div>{p.description}</div>
              <div>
                <button className="border-zinc-900 p-4 font-bold bg-gray-800 text-white rounded-md">
                  add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;
