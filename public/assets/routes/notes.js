const notes = require('express').Router();

// GET route for retrieving all notes
notes.get('/api/notes', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

notes.post('/api/notes', (req, res) => {
    
});

module.exports = notes;