const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/src/pages/home/index.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/src/pages/login/index.html'));
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
