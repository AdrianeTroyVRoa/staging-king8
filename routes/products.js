//db prisma
const { createProduct } = require("../prisma/queries/productQueries");
const { Router } = require("express");
const { body, validationResult } = require("express-validator");
const productRouter = Router();

const cors = require("cors");
const bodyParser = require("body-parser");

//middle ware
productRouter.use(bodyParser.urlencoded({ extended: true}));
productRouter.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["POST"],
    allowedHeaders: ["Content-Type"],
  })
);

const productValidation = [
  body("product_name").escape().notEmpty(),
  body("num_left").escape().notEmpty(),
  body("description").escape().notEmpty()
];

async function addProduct(product) {
  const newProduct = await createProduct({
    product_name: product.product_name,
    mobile_num: product.num_left,
    first_name: product.description,
  });
  console.log("New product")
  return newProduct;
}

productRouter.post("/add-product", productValidation, async (req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json({ errors: errors.array() });
  }

  const { product_name, num_left, description } = req.body;

  try{
    await createProduct({
      product_name,
      num_left,
      description,
    });
    console.log("Added product")
    return res.status(201).json({ message: "Product added successfully"});
  } catch (error){
    console.log(error);
    return res.status(500).json({ error: "Failed to add product" });
  }
});

module.exports = productRouter;