const express = require("express");
const router = express.Router();
const indexController = require("../controller/indexController");

router.get(
  "/",
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

module.exports = router;
