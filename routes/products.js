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
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

const productValidation = [
  body("product_name").escape().notEmpty(),
  body("num_left").isNumeric().withMessage("Number left must be a number"),
  body("description").escape().notEmpty(),
  body("image_url").escape().notEmpty()
];

productRouter.post("/add-product", productValidation, async (req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json({ errors: errors.array() });
  }

  const { product_name, num_left, description, image_url } = req.body;

  try{
    await createProduct({
      product_name,
      num_left: Number(num_left),
      description,
      image_url
    });
    console.log("Added product")
    return res.status(201).json({ message: "Product added successfully"});
  } catch (error){
    console.log(error);
    return res.status(500).json({ error: "Failed to add product" });
  }
});

productRouter.put("/edit-product/:id", async(req, res) =>{
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json({ errors: errors.array() });
  }

  const { product_name, num_left, description, image_url } = req.body;
  const productId = req.params.id;

  try{
    const updatedProduct = await updateProduct(productId, {
      product_name,
      num_left,
      description,
      image_url,
    });
    console.log("updated product");
    return res.status(200).json({ message: "Product updated successfully", product: updatedProduct });
  } catch(error){
    console.log(error);
    return res.status(500).json({ error: "Failed to edit product" });
  }
});

productRouter.delete("/delete-product/:id", async(req, res)=>{
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