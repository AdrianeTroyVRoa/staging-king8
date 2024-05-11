//db prisma
const {
  createProduct,
  getProductById,
  getAllProducts,
} = require("../prisma/queries/productQueries");

const { Router } = require("express");
const router = Router();

const path = require("path");

const projectPath = path.resolve(__dirname, "..");
//const imgFolderPath = path.join(projectPath, "public/img/products"); //path to the image folder

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
  } catch (error) {
    return new Error("Failed to process data: " + error.message);
  }
}

const sampleProduct = {
  name: "Plastic Chair",
  num_left: 1500,
  description: "Chair made of premium plastic",
  img_src: "something.png",
};

console.log(sampleProduct);

try {
  addProduct(sampleProduct);
} catch (Error) {
  console.log(Error.message);
}

async function showProducts() {
  console.log("Current Products in the Database---------------------");
  console.log(await getAllProducts());
}

showProducts();

module.exports = { addProduct, showProducts, router };
