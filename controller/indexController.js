const indexStore = require("../store/indexStore");

exports.getProducts = async (req, res) => {
  try {
    const listProduct = await indexStore.getProducts();
    res.json(listProduct);
  } catch (err) {
    console.log("error obtain products", err);
    res.status(500).json({
      error: "error en el servidor",
    });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const idProduct = await indexStore.getProductById(req.params.id);
    res.json(idProduct);
  } catch (err) {
    console.log("error to find", err);
    res.status(500).json({
      error: err,
    });
  }
};

exports.createProduct = async (req, res) => {
  const newProduct = await indexStore.createProduct(req.body);
  res.json(newProduct);
};

exports.updateProduct = async (req, res) => {
  try {
    const updated = await indexStore.updateProduct(req.params.id, req.body);
    res.json(updated);
  } catch (err) {
    console.log("error", err);
  }
};

exports.deleteProduct = async (req, res) => {
  const productRemove = await indexStore.deleteProducts(req.params.id);
  res.json(productRemove);
};
