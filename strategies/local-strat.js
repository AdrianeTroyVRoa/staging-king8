const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const { getUserByEmail, getUserById } = require("../prisma/queries/userQueries");

passport.serializeUser((user, done) => {
  console.log("Inside Serializer");
  console.log(user);
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  console.log("Inside Deserializer");
  console.log(`Deserializing user ${id}`);
  try {
    const findUser = await getUserById(id); // Ensure you have a function to fetch by ID
    if (!findUser) {
      throw new Error("User not found.");
    }
    done(null, findUser);
  } catch (err) {
    done(err, null);
  }
});

passport.use(
  new LocalStrategy({ usernameField: "email" }, async (email, password, done) => {
    console.log("REACHED PASSPORT!");
    console.log(`email: ${email}`);
    console.log(`password: ${password}`);
    try {
      const findUser = await getUserByEmail(email);
      if (!findUser) {
        return done(null, false, { message: "User not found." });
      }

      const isPassKeyMatched = await bcrypt.compare(password, findUser.password);
      if (!isPassKeyMatched) {
        return done(null, false, { message: "Passwords don't match" });
      }

      return done(null, findUser);
    } catch (err) {
      return done(err);
    }
  })
);

module.exports = passport;
