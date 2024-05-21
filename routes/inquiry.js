const {
  createInquiry,
  getInquiryById,
  getAllInquiries,
} = require("../prisma/queries/inquiriesQueries");

const { Router } = require("express");
const inquiryRouter = Router();
const { parsePhoneNumber, isValidNumber } = require("libphonenumber-js");

//adding inquiry
async function addInquiry(inquiry) {
  try {
    const newInquiry = await createInquiry({
      name: inquiry.name,
      subject: inquiry.subject,
      mobile_num: inquiry.mobile_num,
      additional_msg: inquiry.msg,
      status: inquiry.status,
    });
    const theInquiry = await getInquiryById(newInquiry.id);
    return "Added to DB";
  } catch (error) {
    return new Error("Failed to process data: " + error.message);
  }
}

//inquiry input
inquiryRouter.post("/submit-inquiry", async (req, res) => {
  const mobileNumber = "+63" + req.body.mobile_number;
  const isValidPHNum = isValidNumber(mobileNumber);

  if (!isValidPHNum) {
    return res.sendStatus(400);
  }

  const parsedNumber = parsePhoneNumber(mobileNumber, "PH");
  const transformMobileNumber = parsedNumber.nationalNumber;

  const newInquiry = {
    name: req.body.name,
    subject: req.body.subject,
    mobile_num: transformMobileNumber,
    additional_msg: req.body.msg,
  };

  try {
    await addInquiry(newInquiry);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }

  return res.sendStatus(200);
});

module.exports = { addInquiry, inquiryRouter };