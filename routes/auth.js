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

async function addCustomer(theUser) {
  const newUser = await createUser({
    email: theUser.email,
    mobile_num: theUser.mobile_num,
    first_name: theUser.first_name,
    last_name: theUser.last_name,
    password: theUser.password,
    role: "CUSTOMER",
  });
  const user = await getUserById(newUser.id);
  console.log(user);
}

router.post("/submit-register", signupValidation, (req, res) => {
  const errorSignup = validationResult(req);

  if (!errorSignup.isEmpty()) {
    console.log(errorSignup.array());
    return;
  }

  const newCustomer = {
    "first_name" : req.body.first_name,
    "last_name" : req.body.last_name,
    "email" : req.body.email,
    "mobile_number" : req.body.mobile_number,
    "password" : req.body.password
  }

  try {
   addCustomer(newCustomer) 
  } catch (error) {
   return res.send('error occured') 
  }

  console.log([first_name, last_name, email, mobile_number, password]);

  return res.send('signup successful');
});

module.exports = router;
