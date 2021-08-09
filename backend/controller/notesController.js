const knex = require('../db/connection');
const { v4: uuid } = require('uuid');

module.exports = {
  async create(req, res) {
    const { title, description } = req.body;

    try {
      await knex('notes').insert({
        id: uuid(),
        title,
        description
      });

      return res.status(201).json({ message: 'note created!'});

    } catch (err) {
      return res.status(500).json(err);
    }
  },

  async retrieveNotes(req, res) {
    try {
      const notes = await knex('notes').select('*');
  
      return res.json(notes);

    } catch (err){
      return res.status(500).json(err);
    }
  },

  async deleteNote(req, res) {
    const { id } = req.params;
    console.log(id);
    
    try {
      const note = await knex('notes').select('id').where('id', id).first();
      console.log(note);

      if(!note) return res.status(404).json({ message: 'Note not found!' });

      await knex('notes').where('id', id).del();

      return res.status(200).json({ message: 'Note deleted!'});

    } catch (err) {
      return res.status(500).json(err);
    }
  }
}