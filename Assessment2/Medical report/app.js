// app.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Only import the datasets that exist in this folder
const dataset1 = require(path.join(__dirname, 'data', 'dataset1.js'));
const dataset2 = require(path.join(__dirname, 'data', 'dataset2.js'));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Root route loads your medical expenses layout immediately
app.get('/', (req, res) => {
    res.render('expenses', { currentData: dataset1, currentDataId: 1 });
});

app.get('/scenario-2', (req, res) => {
    res.render('expenses', { currentData: dataset2, currentDataId: 2 });
});

// Boot Engine listener
app.listen(PORT, () => {
    console.log(`>>> EXPENSE APP ONLINE <<<`);
    console.log(`View your report at: http://localhost:${PORT}`);
}).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        app.listen(3002, () => {
            console.log(`>>> EXPENSE APP ONLINE (FALLBACK) <<<`);
            console.log(`View your report at: http://localhost:3002`);
        });
    }
});