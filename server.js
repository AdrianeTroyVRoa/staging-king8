const express = require("express");
const path = require("path");
const app = express();
const session = require("express-session");
const passport = require("passport");

const regisRouter = require("./routes/register.js");
const loginRouter = require("./routes/login.js");

const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  }),
);

const inquiryRouter = require("./routes/inquiry.js");

const logoutRouter = require("./routes/logout.js");
//const product = require('./routes/products.js');
//const productRouter = product.productRouter;

app.use(express.json());
app.use(express.static(path.join(__dirname, "dist")));

app.use(
  session({
    secret: "krimelsPaRin",
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 60000 * 60,
    },
  }),
);

app.use(passport.initialize());
app.use(passport.session());

app.use(regisRouter);
app.use(loginRouter);
app.use(inquiryRouter);
//app.use(productRouter);
app.use(logoutRouter);

//api workings
//const mockUsers = [
//  { id: 1, firstName: "Heather", lastName: "Parks", mobileNum: "09123456789" },
//  { id: 2, firstName: "Alvin", lastName: "Parks", mobileNum: "09123456789" },
//  { id: 3, firstName: "Roger", lastName: "Parks", mobileNum: "09123456789" },
//  { id: 4, firstName: "Jake", lastName: "Parks", mobileNum: "09123456789" },
//];
//
//app.get("/api/data", (req, res) => {
//  res.json({ message: "Hello from the backend!" });
//  console.log(req.session)
//});
//
//app.get("/api/users", (req, res) => {
//  res.send(mockUsers);
//  console.log(req.session.id)
//});
//
//app.post("/api/users", (req, res) => {
//  res.sendStatus(200);
//});
//
//app.get("/api/users/:id", (req, res) => {
//  console.log(req.params);
//  const parseId = parseInt(req.params.id);
//  if (isNaN(parseId)) {
//    return res.status(400).send("Bad request. Invalid ID");
//  }
//
//  const findUser = mockUsers.find((user) => user.id === parseId);
//  if (!findUser) {
//    return res.sendStatus(404);
//  }
//
//  return res.send(findUser);
//});

//Routing Web pages
//app.get("/", (req, res) => {
//  res.sendFile(path.join(__dirname, "dist/src/pages/home/index.html"));
//});
//
//app.get("/home", (req, res) => {
//  res.sendFile(path.join(__dirname, "dist/src/pages/home/index.html"));
//});
//
//app.get("/sign-up", (req, res) => {
//  res.sendFile(path.join(__dirname, "dist/src/pages/register/index.html"));
//});
//
//app.get("/login", (req, res) => {
//  res.sendFile(path.join(__dirname, "dist/src/pages/login/index.html"));
//});

// Start server
//
//app.get("/about us", (req, res) => {
//  res.sendFile(path.join(__dirname, "dist/src/pages/about/index.html"));
//});

app.use(express.static(path.join(__dirname, 'dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
