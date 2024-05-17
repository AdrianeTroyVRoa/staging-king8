//db prisma
const {
  createCustomer,
  getCustomerById,
} = require("../prisma/queries/customerQueries");

const {
  createUser,
  getUserById,
  getUserByEmail,
} = require("../prisma/queries/userQueries");

const { Router } = require("express");
const { parsePhoneNumber, isValidNumber } = require("libphonenumber-js");

const router = Router();

const cors = require('cors')
const { body, validationResult } = require("express-validator");
const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: true }));
router.use(cors({
  origin: 'http://localhost:3000',
  methods: ['POST'],
  allowedHeaders: ['Content-Type']
}));

const signupValidation = [
  body("first_name").escape().notEmpty(),
  body("last_name").escape().notEmpty(),
  body("email").isEmail().notEmpty(),
  body("mobile_number").escape().notEmpty(),
  body("password").isLength({ min: 8 }).escape().notEmpty(),
];

//register
async function addCustomer(customer) {
  try {
    const newUser = await createUser({
      email: customer.email,
      mobile_num: customer.mobile_number,
      first_name: customer.first_name,
      last_name: customer.last_name,
      password: customer.password,
    });
    const newCustomer = await createCustomer({
      userId: newUser.id,
    });
    const user = await getUserById(newUser.id);
    const custom = await getCustomerById(newCustomer.id);
    console.log(user);
    console.log(custom);
  } catch (error) {
    return new Error("Failed to process data: " + error.message);
  }
}

//registration proper
router.post("/submit-register", signupValidation, (req, res) => {
  const errorSignup = validationResult(req);

  if (!errorSignup.isEmpty()) {
    console.log(errorSignup.array());
    return;
  }

  const mobileNumber = req.body.mobile_number;
  const isValidPHNum = isValidNumber(mobileNumber);

  if (!isValidPHNum) {
    return res.send("Not a valid PH phone number");
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
    addCustomer(newCustomer);
  } catch (error) {
    console.log(error);
    return res.send("error occured");
  }

  console.log(newCustomer);

  return res.sendStatus(200);
});

async function matchPassKey(email) {
  try {
    const user = await getUserByEmail(email);
    if (user) {
      return user.password;
    }
    return null;
  } catch (err) {
    throw err;
  }
}

//login proper
router.post("/login-user", async (req, res) => {
  const email = req.body.email;
  const pass = req.body.password;
  const passKeyToMatch = await matchPassKey(email);

  //console.log(passKeyToMatch);
  if (passKeyToMatch == pass) {
    return res.send("Logged In");
  }

  return res.status(400).send("Not matching any accounts.");
});

module.exports = router;
