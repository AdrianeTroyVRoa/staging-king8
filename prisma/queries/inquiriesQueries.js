const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function createInquiry(inquiryData) {
  return prisma.inquiries.create({
    data: inquiryData,
  });
}

async function getInquiryById(inquiryId) {
  return prisma.inquiries.findUnique({
    where: {
      id: inquiryId,
    },
  });
}

async function getAllInquiries() {
  return prisma.inquiries.findMany();
}

async function updateInquiry(inquiryId, updatedData) {
  return prisma.inquiries.update({
    where: {
      id: inquiryId,
    },
    data: updatedData,
  });
}

async function deleteInquiry(inquiryId) {
  return prisma.inquiries.delete({
    where: {
      id: inquiryId,
    },
  });
}

module.exports = { createInquiry, getInquiryById, getAllInquiries, updateInquiry, deleteInquiry };