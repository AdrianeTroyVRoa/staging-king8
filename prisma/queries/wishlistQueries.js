const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function createWishlist(wishlist) {
  return prisma.interaction.create({
    data: wishlist,
  });
}

async function getWishlistById(wishlistId) {
  return prisma.interaction.findUnique({
    where: {
      id: wishlistId,
    },
  });
}

async function getAllWishlists() {
  return prisma.interaction.findMany({
    where: {
      Inquiries: {
        none: {},
      },
    },
  });
}

module.exports = { createWishlist, getWishlistById, getAllWishlists };
