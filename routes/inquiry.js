const { createInquiry, getInquiryById, getAllInquiries } = require('../prisma/queries/inquiriesQueries')

const { Router } = require("express");
const router = Router();

async function addInquiry(inquiry) {
  try {
    const newInquiry = await createInquiry({
      name: inquiry.name,
      num_left: inquiry.num_left,
      description: inquiry.description,
      image_src: inquiry.img_src,
    });
    const theInquiry = await getInquiryById(newInquiry.id);
    console.log(theInquiry);
  } catch (error) {
    return new Error("Failed to process data: " + error.message);
  }
}
