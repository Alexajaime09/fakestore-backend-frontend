const axios = require("axios");
const { listenerCount } = require("process");

const getData = async () => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    listProducts = response.data;

    return listProducts.map((p) => ({
      ...p,
      slug: p.title.replaceAll(" ", "-"),
    }));

    // return listProducts;
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
    productFound,
  };
};

const updateProduct = async (productId, product) => {
  let listProducts = await getData();

  const indexProduct = listProducts.findIndex(
    (p) => p.id === parseInt(productId)
  );
  if (indexProduct === -1) {
    return {
      code: 404,
      message: "product not found",
    };
  }

  listProducts[indexProduct] = { ...listProducts[indexProduct], ...product };

  return {
    status: {
      code: 200,
      message: "correct",
      updateProduct: listProducts[indexProduct],
    },
  };
};

const deleteProducts = async (productId) => {
  try {
    const listProducts = await getData();
    console.log(productId);
    const productFound = listProducts.find((p) => p.id === parseInt(productId));
    console.log(productFound);
    if (productFound !== -1) {
      productFound + 1;
      listProducts.splice(productFound, 1);
    }

    return {
      productRemove: productFound.title,
      id: productFound.id,
      code: 200,
      message: "product removed from the list",
    };
  } catch (err) {
    return {
      status: 500,
      message: err.message || "an error ocurred",
    };
  }
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
  deleteProducts,
};
