const axios = require("axios");

const getData = async () => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    listProducts = response.data;
    console.log(listProducts);
    return listProducts;
  } catch (err) {
    console.log(err);
  }
};

const getProducts = async () => {
  const listProducts = await getData();
  console.log(listProducts);
  return {
    status: {
      code: 200,
    },
    listProducts,
  };
};

const getProductById = async (id) => {
  const products = await getData();
  const productFound = products.find((p) => p.id === parseInt(id));

  if (!productFound) {
    return {
      status: {
        code: 404,
        message: "product not found",
      },
    };
  }

  return {
    status: {
      code: 202,
      message: "product found",
    },
  };
};

const createProduct = async (newp) => {
  let products = await getData();
  const newArray = { ...products, newp };
  products = newArray;

  return {
    status: {
      code: 200,
      message: newp,
    },
  };
};

const updateProduct = async (updateProduct) => {
  let listProducts = await getData();
  const newArray = listProducts.map((p) =>
    p.id === updateProduct.id
      ? { ...listProducts, ...updateProduct }
      : listProducts
  );

  listProducts = newArray;
  console.log(listProducts);
  return {
    status: {
      code: 200,
      message: data,
    },
  };
};

/* app.get("/", async (req, res) => {
  try {
    const data = await getData();
    res.json(data);
  } catch (error) {
    res.status(500).json({ err: error });
  }
}); */

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
};
