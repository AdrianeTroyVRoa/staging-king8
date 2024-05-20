//db prisma
const {
  createCustomer,
  getCustomerById,
} = require("../prisma/queries/customerQueries");
const { createUser, getUserById } = require("../prisma/queries/userQueries");

//for routing
const { Router } = require("express");
const regisRouter = Router();

const { parsePhoneNumber, isValidNumber } = require("libphonenumber-js");

//for hashing
const bcrypt = require("bcrypt");
const saltRounds = 10;

const cors = require("cors");
const { body, validationResult } = require("express-validator");
const bodyParser = require("body-parser");
regisRouter.use(bodyParser.urlencoded({ extended: true }));
regisRouter.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["POST"],
    allowedHeaders: ["Content-Type"],
  }),
);

const signupValidation = [
  body("first_name").escape().notEmpty(),
  body("last_name").escape().notEmpty(),
  body("email").isEmail().notEmpty(),
  body("mobile_number").escape().notEmpty(),
  body("password").isLength({ min: 8 }).escape().notEmpty(),
];

//register
async function addCustomer(customer) {
  const hashedUserPass = bcrypt.hashSync(customer.password, saltRounds);

  const newUser = await createUser({
    email: customer.email,
    mobile_num: customer.mobile_number,
    first_name: customer.first_name,
    last_name: customer.last_name,
    password: hashedUserPass,
  });
  const newCustomer = await createCustomer({
    userId: newUser.id,
  });
  const user = await getUserById(newUser.id);
  const custom = await getCustomerById(newCustomer.id);
  console.log(user);
  console.log(custom);
}

//registration proper
regisRouter.post("/submit-register", signupValidation, async (req, res) => {
  const errorSignup = validationResult(req);

  if (!errorSignup.isEmpty()) {
    console.log(errorSignup.array());
    return;
  }

  const mobileNumber = "+63" + req.body.mobile_number;
  const isValidPHNum = isValidNumber(mobileNumber);

  if (!isValidPHNum) {
    return res.sendStatus(400);
  }

  const parsedNumber = parsePhoneNumber(mobileNumber, "PH");
  const transformMobileNumber = parsedNumber.nationalNumber;

  password = req.body.password;
  confPass = req.body.confirm_password;

  const newCustomer = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    mobile_number: transformMobileNumber,
    password: req.body.password,
  };

  try {
    await addCustomer(newCustomer);
  } catch (error) {
    console.log(error)
    return res.sendStatus(500);
  }

  console.log(newCustomer);

  return res.sendStatus(200);
});

module.exports = regisRouter;
