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

module.exports = { createProduct, getProductById, getAllProducts };
