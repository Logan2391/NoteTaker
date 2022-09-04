const notes = require('express').Router();
const {readFromFile, writeToFile, readAndAppend} = require('../helper/fsHelp.js');
const { v4: uuidv4 } = require('uuid');

// GET route for retrieving all notes
notes.get('/notes', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST for new notes
notes.post('/notes', (req, res) => {
    console.log(req.body);

    const { title, text } = req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
            id: uuidv4(),
        };
        readAndAppend(newNote, './db/db.json');
        res.json(`Your note was added successfully`);
    } else {
        res.err('Error adding your note')
    }
});

module.exports = notes;