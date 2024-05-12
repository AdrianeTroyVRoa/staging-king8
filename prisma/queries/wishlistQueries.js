const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function createWishlist(wishlist) {
  return prisma.wishlist.create({
    data: wishlist,
  });
}

async function getWishlistById(wishlistId) {
  return prisma.wishlist.findUnique({
    where: {
      id: wishlistId,
    },
  });
}

async function getAllWishlists() {
  return prisma.wishlist.findMany();
}

module.exports = { createWishlist, getWishlistById, getAllWishlists };
