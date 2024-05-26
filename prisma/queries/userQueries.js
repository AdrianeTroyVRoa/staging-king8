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
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
    include: {
      Customer: true,
      Employee: true,
    },
  });

  if (!user) {
    return null;
  }

  const userType = user.Customer ? 'Customer' : user.Employee ? 'Employee' : 'Unknown';
  
  return {
    ...user,
    userType: userType,
  };
}

module.exports = {
  createUser,
  getUserById,
  getUserByEmail,
};
