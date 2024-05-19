const { getUserByEmail } = require("../prisma/queries/userQueries");

const { Router } = require("express");
const loginRouter = Router()

const bcrypt = require('bcrypt')

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
loginRouter.post("/login-user", async (req, res) => {
  const email = req.body.email;
  const pass = req.body.password;
  const passKeyToMatch = await matchPassKey(email);

  //console.log(passKeyToMatch);
  const isPassKeyMatched = bcrypt.compareSync(pass, passKeyToMatch)
  if (isPassKeyMatched) {
    return res.sendStatus(200);
  }

  return res.sendStatus(400);
});

module.exports = loginRouter;
