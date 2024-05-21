app.use(express.static(path.join(__dirname, 'dist')));
// Serve HTML files
const express = require("express");
const path = require("path");
const app = express();
const regisRouter = require("./routes/register.js");
const loginRouter = require("./routes/login.js");

app.use(express.json());
app.use(express.static(path.join(__dirname, "dist")));
app.use(regisRouter);
app.use(loginRouter);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Your reCAPTCHA secret key
const secretKey = '6LcD2OEpAAAAACLlQB6HjvG1DlZBASDe-98SKPTr'; 

// CAPTCHA verification route
app.post('/verify-captcha', (req, res) => {
    const captchaResponse = req.body['captchaResponse'];

    // Verify CAPTCHA with Google reCAPTCHA API
    request.post('https://www.google.com/recaptcha/api/siteverify', {
        form: {
            secret: secretKey,
            response: captchaResponse
        }
    }, (error, response, body) => {
        body = JSON.parse(body);
        if (!error && response.statusCode == 200 && body.success) {
            // CAPTCHA verification successful
            res.json({ success: true });
        } else {
            // CAPTCHA verification failed
            res.json({ success: false });
        }
    });
});

//api workings
const mockUsers = [
  { id: 1, firstName: "Heather", lastName: "Parks", mobileNum: "09123456789" },
  { id: 2, firstName: "Alvin", lastName: "Parks", mobileNum: "09123456789" },
  { id: 3, firstName: "Roger", lastName: "Parks", mobileNum: "09123456789" },
  { id: 4, firstName: "Jake", lastName: "Parks", mobileNum: "09123456789" },
];

app.get("/api/data", (req, res) => {
  res.json({ message: "Hello from the backend!" });
});

app.get("/api/users", (req, res) => {
  res.send(mockUsers);
});

app.post("/api/users", (req, res) => {
  res.sendStatus(200);
});

app.get("/api/users/:id", (req, res) => {
  console.log(req.params);
  const parseId = parseInt(req.params.id);
  if (isNaN(parseId)) {
    return res.status(400).send("Bad request. Invalid ID");
  }

  const findUser = mockUsers.find((user) => user.id === parseId);
  if (!findUser) {
    return res.sendStatus(404);
  }

  return res.send(findUser);
});

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
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
