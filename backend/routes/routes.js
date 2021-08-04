const router = require('express').Router();
const notesController = require('../controller/notesController');

router.get('/', notesController.retrieveNotes);

router.post('/create', notesController.create);

router.delete('/:id', notesController.deleteNote);

module.exports = router;