const express = require("express");
const router = express.Router();
const indexController = require("../controller/indexController");

router.get(
  "/products",
  (_, __, next) => {
    console.log("obteniendo datos");
    next();
  },
  indexController.getProducts
);

router.get(
  "/products/:id",
  (_, __, next) => {
    console.log("get product by id");
    next();
  },
  indexController.getProductById
);

router.post(
  "/products",
  (_, __, next) => {
    console.log("creadon producto");
    next();
  },
  indexController.createProduct
);

router.put(
  "/products/:id",
  (_, __, next) => {
    console.log("actualizando producto");
    next();
  },
  indexController.updateProduct
);

router.delete(
  "/products/:id",
  (_, __, next) => {
    console.log("eliminando producto");
    next();
  },
  indexController.deleteProduct
);
module.exports = router;
