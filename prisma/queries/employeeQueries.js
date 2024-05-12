const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function createEmployee(employeeData) {
  return prisma.employee.create({
    data: employeeData,
  });
}

async function getEmployeeById(employeeId) {
  return prisma.employee.findUnique({
    where: {
      id: employeeId,
    },
    include: { user: true },
  });
}

async function getEmployeeByEmail(email) {
  return prisma.user.findUnique({
    where: {
      email: email,
    },
    include: { employee: true },
  });
}

module.exports = {
  createEmployee,
  getEmployeeById,
  getEmployeeByEmail,
};
