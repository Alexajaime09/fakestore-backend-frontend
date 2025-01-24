const indexStore = require("../store/indexStore");

exports.getProducts = (req, res) => {
  const listProduct = indexStore.getProducts();
  res.json(listProduct);
};

exports.getProductById = (req, res) => {
  const idProduct = indexStore.getProductById(req.params.id);
  res.status(idProduct.status.code).json(idProduct);
};

exports.createProduct = (res, req) => {
  const newProduct = indexStore.createProduct(req.body);
  res.status(newProduct.status.code).json(newProduct);
};
