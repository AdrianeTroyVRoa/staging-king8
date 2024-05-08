const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function createUser(userData) {
  return prisma.user.create({
    data: userData,
  });
}

async function getUserById(userId) {
  return prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
}

async function getUserByEmail(email) {
  return prisma.user.findUnique({
    where: {
      email: email,
    },
  });
}

async function main() {
  // ... you will write your Prisma Client queries here
  const allUsers = await prisma.user.findMany();
  console.log(allUsers);
}

module.exports = {
  createUser,
  getUserById,
  getUserByEmail,
};
