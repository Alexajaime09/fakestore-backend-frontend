import React from "react";
import StorePage from "../StorePage";

const Home = () => {
  return (
    <div>
      <h1 className="text-3xl my5 ">List Products</h1>
      <div className="h-full">
        <StorePage />
      </div>
    </div>
  );
};

export default Home;
