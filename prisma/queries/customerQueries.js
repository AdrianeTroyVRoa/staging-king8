const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function createCustomer(customerData) {
  return prisma.customer.create({
    data: customerData,
  });
}

async function getCustomerById(customerId) {
  return prisma.customer.findUnique({
    where: {
      id: customerId,
    },
  });
}

async function getCustomerByEmail(email) {
  return prisma.user.findUnique({
    where: {
      email: email,
    },
    include: { customer: true },
  });
}

module.exports = {
  createCustomer,
  getCustomerById,
  getCustomerByEmail,
};
