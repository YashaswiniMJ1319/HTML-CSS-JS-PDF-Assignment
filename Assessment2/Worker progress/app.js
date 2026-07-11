// app.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Explicit structural alignment paths
const dataset1 = require(path.join(__dirname, 'data', 'dataset1.js'));
const dataset2 = require(path.join(__dirname, 'data', 'dataset2.js'));

// Configure engine options explicitly 
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Explicit public path static asset routing
app.use(express.static(path.join(__dirname, 'public')));

// Fallback error-catching template renderer
app.get('/', (req, res) => {
    res.render('index', { currentData: dataset1, currentDataId: 1 });
});

app.get('/scenario-2', (req, res) => {
    res.render('index', { currentData: dataset2, currentDataId: 2 });
});

// Start listening profile
app.listen(PORT, () => {
    console.log(`>>> SERVER BOOT SUCCESSFUL! <<<`);
    console.log(`Maps your web browser to: http://localhost:${PORT}`);
}).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.log(`Port ${PORT} is busy. Trying port 3001 instead...`);
        app.listen(3001, () => {
            console.log(`Maps your web browser to: http://localhost:3001`);
        });
    } else {
        console.log("Server error:", err);
    }
});