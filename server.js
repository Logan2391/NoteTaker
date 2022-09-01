const express = require('express');
const path = require('path');
const api = require('./assets/routes/index.js');

const PORT = process.env.PORT || 3001;

const app = express();

// GET Route for homepage
app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, '/assets/index.html'))
);

app.listen(PORT, () => 
    console.log(`App listening at http://localhost:${PORT}`)
);