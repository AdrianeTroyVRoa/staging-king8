//db prisma
const { createProduct, updateProduct, deleteProduct } = require("../prisma/queries/productQueries");
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
    methods: ["POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

const productValidation = [
  body("product_name").escape().notEmpty(),
  body("num_left").escape().notEmpty(),
  body("description").escape().notEmpty()
];

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

productRouter.put("/edit-account/:id", productValidation, async(req, res) =>{
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json({ errors: errors.array() });
  }

  const { product_name, num_left, description } = req.body;
  const productId = req.params.id;

  try{
    const updatedProduct = await updateProduct(productId, {
      product_name,
      num_left,
      description,
    });
    console.log("updated product");
    return res.status(200).json({ message: "Product updated successfully", product: updatedProduct });
  } catch(error){
    console.log(error);
    return res.status(500).json({ error: "Failed to edit product" });
  }
});

productRouter.delete("/delete-account/:id", async(req, res)=>{
  const productId = req.params.id;
  try{
    await deleteProduct(productId);
    console.log("Deleted product");
    return res.status(200).json({ message: "Product deleted successfully" });
  } catch(error){
    console.log(error);
    return res.status(500).json({ error: "Delete product failed" });
  }
});

module.exports = productRouter;