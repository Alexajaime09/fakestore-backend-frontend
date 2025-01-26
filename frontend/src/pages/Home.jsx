import React from "react";
import Store from "../Store";

const Home = () => {
  return (
    <div>
      <h1 className="text-3xl my5 ">List Products</h1>
      <div className="h-full">
        <Store />
      </div>
    </div>
  );
};

export default Home;
