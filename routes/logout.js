const express = require("express");
const logoutRouter = express.Router();

logoutRouter.get('/auth/check-auth', (req, res) => {
  if(req.isAuthenticated()) {
    res.sendStatus(200)
  } else {
    res.sendStatus(401)
  }
})

logoutRouter.get("/logout-user", (req, res, next) => {
  if (!req.user) {
    console.error("User not authenticated");
    return res.sendStatus(401); // Unauthorized
  }

  req.logout((err) => {
    if (err) {
      console.error("Error during logout:", err);
      return next(err);
    }

    req.session.destroy((err) => {
      if (err) {
        console.error("Error destroying session:", err);
        return next(err);
      }

      res.clearCookie("connect.sid"); // Adjust the cookie name if necessary
      console.log("Logout successful");
      res.sendStatus(200); // OK
    });
  });
});

module.exports = logoutRouter;
