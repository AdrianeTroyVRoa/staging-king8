const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function createProduct(product) {
  return prisma.product.create({
    data: product,
  });
}

async function getProductById(productId) {
  return prisma.product.findUnique({
    where: {
      id: productId,
    },
  });
}

async function getAllProducts() {
  return prisma.product.findMany();
}

async function updateProduct() {
  return prisma.product.update({
    where:{
      id:productId,
    },
    data: updatedData
  })
}

async function deleteProduct(){
  return prisma.product.delete({
    where:{
      id:productId,
    }
  })
}

module.exports = { createProduct, getProductById, getAllProducts, updateProduct, deleteProduct };
