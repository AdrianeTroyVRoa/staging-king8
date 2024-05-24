//db prisma
const {
  createProduct,
  getProductById,
  getAllProducts,
  updateProduct,
  deleteProduct,
} = require("../prisma/queries/productQueries");

const { Router } = require("express");
const productRouter = Router();

const path = require("path");

const projectPath = path.resolve(__dirname, "..");
//const imgFolderPath = path.join(projectPath, "public/img/products"); //path to the image folder

//adding product
async function addProduct(product) {
  try {
    const newProduct = await createProduct({
      name: product.name,
      num_left: product.num_left,
      description: product.description,
      image_src: product.img_src,
    });
    const theProduct = await getProductById(newProduct.id);
    console.log(theProduct);
    return "Added to DB";
  } catch (error) {
    return new Error("Failed to process data: " + error.message);
  }
}

async function showProducts() {
  console.log("Current Products in the Database---------------------");
  console.log(await getAllProducts());
}

//showProducts();
productRouter.post("/add-product", async (req, res) => {
  const newProduct = {
    name: req.body.name,
    num_left: req.body.num_left,
    description: req.body.description,
    img_src: req.body.img_src,
  };

  try {
    await addProduct(newProduct);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }

  return res.sendStatus(200);
});

module.exports = { addProduct, showProducts, productRouter };