//db prisma
const { createUser, getUserById } = require("../prisma/queries/userQueries");

const { Router } = require("express");

const router = Router();

const { body, validationResult } = require("express-validator");
const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: true }));

const signupValidation = [
  body("first_name").escape().notEmpty(),
  body("last_name").escape().notEmpty(),
  body("email").isEmail().notEmpty(),
  body("mobile_number").escape().notEmpty(),
  body("password").isLength({ min: 8 }).escape().notEmpty(),
];

//register
async function addCustomer(theUser) {
  try {
    const newUser = await createUser({
      email: theUser.email,
      mobile_num: theUser.mobile_number,
      first_name: theUser.first_name,
      last_name: theUser.last_name,
      password: theUser.password,
      role: "CUSTOMER",
    });
    const user = await getUserById(newUser.id);
    console.log(user);
  } catch (error) {
    return new Error("Failed to process data: " + error.message);
  }
}

//mobile_number transformation
function transformNumber(mobile_number) {
  let formatted_mobile_number = "";
  let isAccordingToFormat = false;

  for (const digit of mobile_number) {
    if (isAccordingToFormat) {
      formatted_mobile_number += digit;
    } else {
      if (digit == 9) {
        isAccordingToFormat = true;
        formatted_mobile_number += digit;
      } else {
        continue;
      }
    }
  }
}

//registration proper
router.post("/submit-register", signupValidation, (req, res) => {
  const errorSignup = validationResult(req);

  if (!errorSignup.isEmpty()) {
    console.log(errorSignup.array());
    return;
  }

  const mobile_number = req.body.mobile_number;
  transformNumber(mobile_number);
  password = req.body.password
  confPass = req.body.confirm_password

  const newCustomer = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    mobile_number: formatted_mobile_number,
    password: req.body.password,
  };

  try {
    addCustomer(newCustomer);
  } catch (error) {
    console.log(error);
    return res.send("error occured");
  }

  console.log(newCustomer);

  return res.send("signup successful");
});

module.exports = router;
