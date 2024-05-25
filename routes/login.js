const { Router } = require("express");
const passport = require("../strategies/local-strat");
const loginRouter = Router();

//const bcrypt = require('bcrypt')

//async function matchPassKey(email) {
//  try {
//    const user = await getUserByEmail(email);
//    if (user) {
//      return user.password;
//    }
//    return null;
//  } catch (err) {
//    throw err;
//  }
//}

//login proper
loginRouter.post("/login-user", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err); }
    if (!user) {
      return res.sendStatus(401);
    }
    req.login(user, (err) => {
      if (err) {
        return next(err);
      }
      return res.sendStatus(200);
    });
  })(req, res, next);
  //const email = req.body.email;
  //const pass = req.body.password;
  //const passKeyToMatch = await matchPassKey(email);

  //console.log("Reached login backend")
  //console.log(pass)
  //console.log(passKeyToMatch)
  //const isPassKeyMatched = bcrypt.compareSync(pass, passKeyToMatch)
  //if (isPassKeyMatched) {
  //  return res.sendStatus(200);
  //}

});

module.exports = loginRouter;
