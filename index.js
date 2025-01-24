const express = require("express");
const morgan = require("morgan");
const products = require("./router/indexRouter");

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(products);

app.listen(8000, () => {
  console.log("port 8000");
});
