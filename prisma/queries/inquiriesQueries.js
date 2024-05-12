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

module.exports = { createInquiry, getInquiryById, getAllInquiries };
