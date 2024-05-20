const { getUserByEmail } = require("../prisma/queries/userQueries");

const { Router } = require("express");
const loginRouter = Router()

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
  if (passKeyToMatch == pass) {
    return res.sendStatus(200);
  }

  return res.status(400).send("Not matching any accounts.");
});

module.exports = loginRouter;
