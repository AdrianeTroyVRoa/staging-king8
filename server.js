const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'dist')));
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

// Serve HTML files
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/src/pages/home/index.html'));
});

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/src/pages/home/index.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/src/pages/login/index.html'));
});

app.get('/sign-up', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/src/pages/register/index.html'));
});

app.get('/about us', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/src/pages/about/index.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
